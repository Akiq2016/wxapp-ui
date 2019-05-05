#!/bin/bash

rootPath=$(pwd)
pkgsPath=$rootPath/packages

echo "> try to new a $1 package ..."
mkdir $pkgsPath/$1
cp -r $rootPath/.template/PACKAGE_TEMPLATE/ $pkgsPath/$1/
echo ''

echo "> try to update config files ..."
python $rootPath/scripts/addpkg.py $pkgsPath/$1
echo ''

echo "> try to get node_modules ..."
cd $rootPath
lerna bootstrap --hoist
echo ''

echo "> Created successfully!"
