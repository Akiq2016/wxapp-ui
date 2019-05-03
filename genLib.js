const fs = require('fs');
const path = require('path');

const rootPath = __dirname;
const libPath = path.join(rootPath, 'library/src');

// write components.js file
const pkgs = fs.readdirSync(path.join(rootPath, 'packages'));
const componentsList = pkgs.map(pkg => ({
  name: pkg,
  url: '/' + pkg + '/pages/index/index',
}));

fs.writeFile(
  path.join(libPath, 'components.js'),
  'module.exports = ' + JSON.stringify(componentsList, null, 2),
  err => {
    if (err) throw err;
  }
);

// write app.json subpackages
let appJson;
try {
  appJson = JSON.parse(fs.readFileSync(path.join(libPath, 'app.json'), 'utf8'));
} catch (error) {
  console.log('Read app json failed');
}

const subpackages = [];
pkgs.forEach(pkg => {
  const pkgPath = path.join(libPath, pkg, 'pages');
  const subPages = fs.readdirSync(pkgPath);
  subpackages.push({
    root: pkg,
    pages: subPages.map(subPage => `pages/${subPage}/${subPage}`),
  });
});
appJson.subpackages = subpackages;

fs.writeFile(
  path.join(libPath, 'app.json'),
  JSON.stringify(appJson, null, 2),
  err => {
    if (err) throw err;
  }
);
