import { routesInit } from './router.core';
import {signupRouter, SIGNUP_ROUTER_PATH} from '../../core/signup/'
import { USERLIST_ROUTER_PATH, userlistRouter } from '../../core/userlist/';

export const routes = {
    [SIGNUP_ROUTER_PATH]: signupRouter,
    [USERLIST_ROUTER_PATH]: userlistRouter
};

export const Router = routesInit(routes);
