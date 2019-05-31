import { combineReducers } from "redux";
import EmployeeReducer from './EmployeeReducer'
/**
 * calling combineReducer and bind as a rootReducer
 * @params connect all reducer as a key-value pair 
 */
const rootReducer = combineReducers({
  employees: EmployeeReducer
});

export default rootReducer;