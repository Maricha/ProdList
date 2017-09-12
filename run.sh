#!/bin/bash
PATH=$PATH:${npm bin}
set -x

ng build --prod

#copy prebuild worker
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts --out dist/ngsw-manifest.json

#serve
cd dist
http-server
