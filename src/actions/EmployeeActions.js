import firebase from 'firebase';
import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEES_FETCH_SUCCESS,EMPLOYEE_SAVE} from './type';

export const employeeUpdate = ({prop,value})=>
{    
    return {
        type: EMPLOYEE_UPDATE,
        payLoad: {prop,value},
        };
};

export const employeeCreate=({name,phone,shift})=>{
      return(dispatch)=>{
            const{currentUser} =firebase.auth();
            firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({name,phone,shift})
            .then(()=>{
                  dispatch({
                        type:EMPLOYEE_CREATE
                  })
            });}
};

export const employeeFetch=()=>{
      const{currentUser} =firebase.auth();
      return(dispatch)=>{
            firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value',snapshot=>{
                        dispatch({
                              type:EMPLOYEES_FETCH_SUCCESS,
                              payLoad:snapshot.val()
                        })
            });
      };
};
export const employeeSave=({name ,phone ,shift ,uid})=>{
      const{currentUser} =firebase.auth();
      return(dispatch)=>{
            firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .set({name,phone,shift})
            .then(()=>dispatch({
                  type:EMPLOYEE_SAVE
            }) )
      }
}

export const employeeDelete=({uid})=>{
      const{currentUser} =firebase.auth();
      return()=>{
            firebase.database().ref(`users/${currentUser.uid}/employees/${uid}`)
            .remove()
      }
}
