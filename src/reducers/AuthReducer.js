import {EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCESS,LOGIN_USER_FAIL,LOGIN_USER} from '../actions/type';
const INITIAL_STATE={
        email:'',
        password:'',
        user:null,
        error:'',
        loading:false,
        };
export default (state=INITIAL_STATE,action)=>{
        // console.log(action);
    switch(action.type)
    { 
        case EMAIL_CHANGED:
                return {...state, email:action.payLoad}; 
        case PASSWORD_CHANGED:
                return {...state, password:action.payLoad}; 
        case LOGIN_USER:
                return{...state, loading: true, error:'' }
        case LOGIN_USER_SUCESS:
                return {...state,...INITIAL_STATE, user:action.payLoad};
        case LOGIN_USER_FAIL:
                return {...state, error:'Authentication Failed.', password:'',loading:false}; 
        default:
            return state
    }
}