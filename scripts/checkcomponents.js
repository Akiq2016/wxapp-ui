const path = require('path');
const fs = require('fs');

const _ = require('./utils');
const config = require('./config');

const srcPath = config.srcPath;

const getExtName = function() {
  return new Promise((resolve, reject) => {
    let extname = '.js';
    fs.readdir(srcPath, function(err, files) {
      console.log(srcPath, '--------');

      const tsFiles = files.filter(el => /\.ts$/.test(el));
      if (tsFiles.length) {
        extname = '.ts';
        resolve(extname);
      } else {
        resolve(extname);
      }
    });
  });
};

/**
 * get json path's info
 */
async function getJsonPathInfo(jsonPath) {
  const dirPath = path.dirname(jsonPath);
  const fileName = path.basename(jsonPath, '.json');
  const relative = path.relative(srcPath, dirPath);
  const fileBase = path.join(relative, fileName);
  const extname = await getExtName();

  return {
    dirPath,
    fileName,
    relative,
    fileBase,
    extname,
  };
}

/**
 * check included components
 */
const checkProps = ['usingComponents', 'componentGenerics'];
async function checkIncludedComponents(jsonPath, componentListMap) {
  const json = _.readJson(jsonPath);
  if (!json) throw new Error(`json is not valid: "${jsonPath}"`);

  const { dirPath, fileName, fileBase, extname } = await getJsonPathInfo(
    jsonPath
  );
  for (let i = 0, len = checkProps.length; i < len; i++) {
    const checkProp = checkProps[i];
    const checkPropValue = json[checkProp] || {};
    const keys = Object.keys(checkPropValue);

    for (let j = 0, jlen = keys.length; j < jlen; j++) {
      const key = keys[j];
      let value =
        typeof checkPropValue[key] === 'object'
          ? checkPropValue[key].default
          : checkPropValue[key];

      if (!value) {
        continue;
      }

      value = _.transformPath(value, path.sep);

      // check relative path
      const componentPath = `${path.join(dirPath, value)}.json`;
      // eslint-disable-next-line no-await-in-loop
      const isExists = await _.checkFileExists(componentPath);
      if (isExists) {
        // eslint-disable-next-line no-await-in-loop
        await checkIncludedComponents(componentPath, componentListMap);
      }
    }
  }

  // checked
  componentListMap.wxmlFileList.push(`${fileBase}.wxml`);
  componentListMap.wxssFileList.push(`${fileBase}.wxss`);
  componentListMap.jsonFileList.push(`${fileBase}.json`);
  componentListMap.jsFileList.push(`${fileBase}${extname}`);

  componentListMap.jsFileMap[fileBase] = `${path.join(
    dirPath,
    fileName
  )}${extname}`;
}

module.exports = async function(entry) {
  const componentListMap = {
    wxmlFileList: [],
    wxssFileList: [],
    jsonFileList: [],
    jsFileList: [],

    jsFileMap: {}, // for webpack entry
  };

  const isExists = await _.checkFileExists(entry);
  if (!isExists) {
    const { dirPath, fileName, fileBase, extname } = await getJsonPathInfo(
      entry
    );

    componentListMap.jsFileList.push(`${fileBase}${extname}`);
    componentListMap.jsFileMap[fileBase] = `${path.join(
      dirPath,
      fileName
    )}${extname}`;

    return componentListMap;
  }

  await checkIncludedComponents(entry, componentListMap);

  return componentListMap;
};
