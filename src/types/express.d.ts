import type { Request } from 'express';

export interface Req extends Request{
    hearders: {
        reponame: string;
    },
    body: {
        accountId: number;
    }
    imgUrl: string;
}