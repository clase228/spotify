import {UPDATE_TOKEN, UPDATE_USERINFO, } from "../types/auth";


export const update_token = (access,refresh) => ({
   type: UPDATE_TOKEN,
   payload: {
      access,
      refresh,
    },
 });
export const update_userInfo = (user_id,email,username) => ({
   type: UPDATE_USERINFO,
   payload: {
      user_id,
      email,
      username,
    },
 });
 
