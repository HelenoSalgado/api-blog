export declare enum Role {
    "USER" = "USER",
    "ADMIN" = "ADMIN",
    "AUTHOR" = "AUTHOR",
    "STORE" = "STORE"
}
export declare const secretUser: string;
export declare const Plan: {
    basic: {
        name: string;
        currentPrice: number;
        limitUsers: number;
        softwareId: number;
        active: boolean;
    };
};
export declare const git: {
    repoName: string;
    repoUrl: string;
};
