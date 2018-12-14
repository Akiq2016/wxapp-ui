#!/bin/bash

rootPath=$(pwd)
pkgsPath=$rootPath/packages

echo "> try to new a $1 package ..."
cd $pkgsPath
git clone --depth=1 https://github.com/modojs/miniprogram-custom-component.git $1
rm -rf "$1/.git"
echo ''

echo "> try to update config files ..."
python3 $rootPath/addpkg.py $pkgsPath/$1
echo ''

echo "> try to get node_modules ..."
cd $rootPath
lerna bootstrap --hoist
echo ''

echo "> Created successfully!"