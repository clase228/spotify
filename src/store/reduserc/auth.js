import { UPDATE_TOKEN,UPDATE_USERINFO  } from "../actions/types/auth";


const initialState = {
  user_id: [],
  email: [],
  username: [],
  access: [],
  refresh: []
};


export default function todoReducer(state = initialState, action) {
  switch (action.type) {

    case UPDATE_TOKEN: {
      const { access, refresh } = action.payload;

      console.log(access);
      return {
         access:access,
         refresh:refresh
      };

    }
    case UPDATE_USERINFO: {
      const { user_id, email,username } = action.payload;

      return {
         ...state,
         user_id:user_id,
         email:email,
         username:username
      };

    }

   
   

    default:
      return state;
  }
}
