import sys
import json

def main():
  pkgPath = sys.argv[1]
  pkgName = pkgPath[pkgPath.rfind('/') + 1:]

  # update package.json
  pkgFilePath = pkgPath + '/package.json'
  pkgFile = open(pkgFilePath)
  pkgData = pkgFile.read()
  pkgFile.close()

  with open(pkgFilePath, 'w') as f:
    pkgData = json.loads(pkgData)
    pkgData['name'] = 'modo-' + pkgName.lower()
    pkgData['homepage'] = 'https://github.com/modojs/wxapp-ui'
    pkgData['repository'] = 'https://github.com/modojs/wxapp-ui/tree/master/packages/' + pkgName
    res = json.dumps(pkgData, indent=2)
    f.write(res)

  # update demo/project.config.json
  projectFilePath = pkgPath + '/demo/project.config.json'
  projectFile = open(projectFilePath)
  projectData = projectFile.read()
  projectFile.close()

  with open(projectFilePath, 'w') as f:
    projectData = json.loads(projectData)
    projectData['projectname'] = 'modo-' + pkgName.lower()
    res = json.dumps(projectData, indent=2, ensure_ascii=False)
    f.write(res)

main()
