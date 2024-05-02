#! /bin/bash

REPO_NAME=$1;
REPO_URL="https://github.com/HelenoSalgado/$REPO_NAME.git";

if [ -d "/tmp/$REPO_NAME" ]; then
    cd "/tmp/$REPO_NAME" && git pull;
    exit 0;
    else 
    cd /tmp && git clone $REPO_URL;
fi

unset REPO_NAME;
unset REPO_URL;