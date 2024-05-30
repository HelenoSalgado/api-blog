import { RequestMethod } from "@nestjs/common";
import { RouteInfo } from "@nestjs/common/interfaces";

const excludRoutes = [
      {
        path: 'plan', method: RequestMethod.GET
      },
      {
        path: 'account', method: RequestMethod.GET
      },
      {
        path: 'profiles', method: RequestMethod.GET
      },
      {
        path: 'profiles/:slug', method: RequestMethod.GET
      },
      {
        path: 'auth', method: RequestMethod.POST
      },
      {
        path: 'auth/verify', method: RequestMethod.GET
      },
      {
        path: 'account/:id', method: RequestMethod.GET
      },
      {
        path: 'account', method: RequestMethod.POST
      },
      {
        path: 'users', method: RequestMethod.POST
      },
      {
        path: 'posts', method: RequestMethod.GET
      },
      {
        path: 'posts/:slug', method: RequestMethod.GET
      },
      {
        path: 'categories', method: RequestMethod.GET
      },
      {
        path: 'categories/:slug', method: RequestMethod.GET
      },
      {
        path: 'upload', method: RequestMethod.POST
      },
] as any;

export default excludRoutes;