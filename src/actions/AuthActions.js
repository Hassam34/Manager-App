import {EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCESS, 
    LOGIN_USER_FAIL,
    LOGIN_USER} from './type';
import firebase from 'firebase';

export const emailChanged=(text)=>{
return{
    type:EMAIL_CHANGED,
    payLoad:text
};
};
export const passwordChanged=(text)=>{
return{
    type:PASSWORD_CHANGED,
    payLoad:text
};
};
export const loginUser=({email,password})=>{  
return(dispatch)=>{ 
    dispatch({
        type:LOGIN_USER
    });
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user=> loginSucces(dispatch,user))
    .catch(()=>
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(user=>loginSucces(dispatch,user))
        .catch(()=> loginFail(dispatch))
    );
};
};

const loginFail=(dispatch)=>{
dispatch(
     {type:LOGIN_USER_FAIL})
}

const loginSucces=(dispatch,user)=>{
dispatch( {type:LOGIN_USER_SUCESS,
payLoad:user},
);


}
