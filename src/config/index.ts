export enum Role {
    "USER",
    "ADMIN",
    "AUTHOR",
    "STORE"
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