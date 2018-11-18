#!/bin/bash

rootPath=$(pwd)
pkgsPath=$rootPath/packages

echo "try to new a $1 package ..."
cd $pkgsPath
git clone https://github.com/modojs/miniprogram-custom-component.git $1
cd $rootPath
