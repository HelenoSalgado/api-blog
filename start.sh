#!/bin/bash

# sed -i "s/:3000/:$PORT/g" /etc/nginx/conf.d/default.conf

# node /app/dist/main.js &

# nginx -g "daemon off;"

#printf "$PWD/src/modules/site/upload/git"

cp -r "$PWD/src/modules/site/upload/git/create.sh" "/tmp";
cp -r "$PWD/src/modules/site/upload/git/push.sh" "/tmp"