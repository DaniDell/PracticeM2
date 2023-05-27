import { CLEAN_STATE, GET_ALL_USERS, GET_USER_DETAIL } from "./action-types";

const initialState = {
  user: [],
  userDetail: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return {
        ...state,
        user: action.payload
      };
     
    case GET_USER_DETAIL:
      return { 
        ...state,
        userDetail: action.payload
      };

      case CLEAN_STATE: 
      return {...state,
      userDetail: {}};

    default:
      return { ...state };
  }
};

export default reducer;
