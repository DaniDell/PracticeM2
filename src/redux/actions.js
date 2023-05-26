import { GET_ALL_USERS } from "./action-types";
import axios from "axios";


export const getAllUsers = () => {
    return async function (dispatch) {
        try {
       const response = await axios.get ("https://jsonplaceholder.typicode.com/users") 
       return dispatch({ type: GET_ALL_USERS, payload: response.data})
    } catch (error) {
        console.log(error.message);
    }

    }
}