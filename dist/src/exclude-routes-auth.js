"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const excludRoutes = [
    {
        path: 'plan', method: common_1.RequestMethod.GET
    },
    {
        path: 'account', method: common_1.RequestMethod.GET
    },
    {
        path: 'profiles', method: common_1.RequestMethod.GET
    },
    {
        path: 'profiles/:slug', method: common_1.RequestMethod.GET
    },
    {
        path: 'auth', method: common_1.RequestMethod.POST
    },
    {
        path: 'auth/verify', method: common_1.RequestMethod.GET
    },
    {
        path: 'account/:id', method: common_1.RequestMethod.GET
    },
    {
        path: 'account', method: common_1.RequestMethod.POST
    },
    {
        path: 'users', method: common_1.RequestMethod.POST
    },
    {
        path: 'posts', method: common_1.RequestMethod.GET
    },
    {
        path: 'posts/:slug', method: common_1.RequestMethod.GET
    },
    {
        path: 'categories', method: common_1.RequestMethod.GET
    },
    {
        path: 'categories/:slug', method: common_1.RequestMethod.GET
    },
    {
        path: 'upload', method: common_1.RequestMethod.POST
    },
];
exports.default = excludRoutes;
//# sourceMappingURL=exclude-routes-auth.js.map