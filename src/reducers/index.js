import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer'
import EmployeeReducers from './EmployeeReducers';
import Employee from './Employee';
export default combineReducers({
    auth: AuthReducer,
    employeeFrom: EmployeeReducers,
    employees: Employee
})