import { CLEAN_STATE, GET_ALL_USERS, GET_USER_DETAIL } from "./action-types";
import axios from "axios";



// export const getAllUsers = () => {
//     return async function (dispatch) {
//         try {
//        const response = await axios.get ("https://jsonplaceholder.typicode.com/users") 
//        return dispatch({ type: GET_ALL_USERS, payload: response.data})
//     } catch (error) {
//         console.log(error.message);
//     }}
// }

export const getAllUsers = () => {
    return  function (dispatch) {
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then (response=> response.json())
        .then(data => dispatch({type: GET_ALL_USERS, payload: data}))
        }
}

export const getUserDetail = (id) => {
    return function (dispatch) {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`).then (response=> response.data)
        .then(data => dispatch({type: GET_USER_DETAIL, payload: data}))
        }
    }
    

export const cleanState = () => {
   return {type: CLEAN_STATE} 
}