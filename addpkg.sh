#!/bin/bash

rootPath=$(pwd)
pkgsPath=$rootPath/packages

echo "try to new a $1 package ..."
cd $pkgsPath
git clone --depth=1 https://github.com/modojs/miniprogram-custom-component.git $1
rm -rf "$1/.git"
cd $rootPath
lerna bootstrap
