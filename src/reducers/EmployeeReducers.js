import {EMPLOYEE_UPDATE,EMPLOYEE_CREATE,EMPLOYEE_SAVE} from '../actions/type';

const INITIAL_STATE={
    name: '',
    phone: '',
    shift: ''
};

export default (state=INITIAL_STATE,action) =>{
    switch(action.type)
    {
        case EMPLOYEE_UPDATE:
            return{...state, [action.payLoad.prop]: action.payLoad.value};
        case EMPLOYEE_CREATE:
            return{...INITIAL_STATE}
        case EMPLOYEE_SAVE:
                return{...INITIAL_STATE}
        default:
            return state;
    }
};