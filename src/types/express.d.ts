import type { Request } from 'express';

export interface Req extends Request{
    hearders: {
        reponame: string;
    },
    body: {
        profileId: number;
        accountId: number;
    }
    image: string;
}