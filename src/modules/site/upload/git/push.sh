#! /bin/bash

REPO_NAME=$1;
MSG_COMMIT=$2;
REPO_URL="https://github.com/HelenoSalgado/$REPO_NAME.git";

if [ -d "/tmp/$REPO_NAME" ]; then
    cd "/tmp/$REPO_NAME" && \
    git add . && \
    git commit -m "$MSG_COMMIT" && \
    git push $REPO_URL;
    exit 0;
    else 
    printf "Repositório não existe";
    exit 1;
fi

unset REPO_NAME;
unset MSG_COMMIT;
unset REPO_URL;