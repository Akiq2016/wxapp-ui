rootpath=$(pwd)
pkgs=$(ls ./packages | xargs echo)
libpath=$rootpath/library/src

# copy files
for pkg in ${pkgs[@]}; do
  echo "copy ${pkg} files ..."
  tmp_page=$rootpath/packages/$pkg/demo/pages/
  tmp_cpn=$rootpath/packages/$pkg/src/

  # add page
  mkdir -p $libpath/$pkg/pages/ && cp -r $tmp_page $_

  # add component
  mkdir -p $libpath/$pkg/components/index && cp -r $tmp_cpn $_
done

# write files
echo "write app.json & components files ..."
node genLib.js

# run tsc wxss build
cd $rootpath/library
echo $PWD
$rootpath/node_modules/.bin/gulp --cwd $PWD
