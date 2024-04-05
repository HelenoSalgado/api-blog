export enum Role {
    "USER" = 1,
    "ADMIN" = 2,
    "AUTHOR" = 3,
    "STORE" = 4
}

export const Plan = {

    basic: {
        name: "Basic",
        currentPrice: 0,
        limitUsers: 3,
        softwareId: 1,
        active: true
    }
}