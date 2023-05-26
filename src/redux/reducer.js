import { GET_ALL_USERS } from "./action-types";

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

    default:
      return { ...state };
  }
};

export default reducer;
