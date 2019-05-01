const path = require('path');

const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const cwd = process.cwd();

const isDev = process.argv.indexOf('--develop') >= 0;
const isWatch = process.argv.indexOf('--watch') >= 0;
const demoSrc = path.resolve(cwd, './tools/demo');
const demoDist = path.resolve(cwd, './miniprogram_dev');
const src = path.resolve(cwd, './src');
const dev = path.join(demoDist, 'components');
const dist = path.resolve(cwd, './miniprogram_dist');

module.exports = {
  entry: ['index'],

  isDev,
  isWatch,
  srcPath: src, // 源目录
  distPath: isDev ? dev : dist, // 目标目录

  demoSrc, // demo 源目录
  demoDist, // demo 目标目录

  wxss: {
    sass: true,
    sourcemap: false, // 生成 sass sourcemap
  },

  webpack: {
    mode: 'production',
    output: {
      filename: '[name].js',
      libraryTarget: 'commonjs2',
    },
    target: 'node', // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
      rules: [
        {
          test: /\.js$/i,
          use: ['babel-loader', 'eslint-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.ts$/,
          enforce: 'pre',
          exclude: [/node_modules/],
          use: [
            {
              loader: 'tslint-loader',
              options: {
                fix: true,
                typeCheck: true,
                configFile: path.resolve(__dirname, '../tslint.json'),
                tsConfigFile: path.resolve(__dirname, '../tsconfig.json'),
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.js', '.json', 'ts', 'tsx'],
    },
    plugins: [new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 })],
    optimization: {
      minimize: false,
    },
    // devtool: 'nosources-source-map', // source map for js
    performance: {
      hints: 'warning',
      assetFilter: assetFilename => assetFilename.endsWith('.js'),
    },
  },

  copy: ['./images'], // will copy to dist
};
