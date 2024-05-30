export enum Role {
    "USER" = "USER",
    "ADMIN" = "ADMIN",
    "AUTHOR" = "AUTHOR",
    "STORE" = "STORE"
}

export const secretUser = process.env.SECRET_USER

export const Plan = {

    basic: {
        name: "Basic",
        currentPrice: 0,
        limitUsers: 3,
        softwareId: 1,
        active: true
    }
}

function repoName(){
    let array = ('https://github.com/HelenoSalgado/rfconsultoria.git').split('.');
    let name = array[array.length -2].split('/')[2];
    return name;
}

export const git = {
    repoName: repoName(),
    repoUrl: 'https://github.com/HelenoSalgado/rfconsultoria.git'
}