#!/bin/sh
shopt -s extglob
cd ../public/
rm -rf !(CNAME)
cd ../code
cp -R build/* ../public/