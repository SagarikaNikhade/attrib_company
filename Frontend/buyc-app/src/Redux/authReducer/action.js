import { FAILURE, LOGIN_SUCCESS, REGISTER_SUCCESS, REQUEST} from "./actionTypes"
import axios from "axios";

export const registerUser = (data) => (dispatch) =>{
    dispatch({type:REQUEST})
    axios.post(`https://relieved-teal-parrot.cyclic.app/users/register`,data)
    .then((res)=>{
        dispatch({type:REGISTER_SUCCESS})
        console.log(res.data)
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}

// login
export const loginUser = (userData) => (dispatch) =>{
    dispatch({type:REQUEST})
    return axios.get(`https://relieved-teal-parrot.cyclic.app/users/login`,userData)
    .then((res)=>{
        const user = res.data
        const sucessLogin = user.find((el)=> el.email === userData.email &&  el.password === userData.password)
     if(sucessLogin){
        dispatch({type:LOGIN_SUCCESS,payload:sucessLogin})
        console.log(sucessLogin)
        alert("Log In Sucessfully !!")
     }else{
        dispatch({type:FAILURE})
        alert("wrong credientials !!")
     }
        
    })
    .catch((err)=>{
        dispatch({type:FAILURE})
    })
}