/** Import constant */
import { GET_ALL_EMPLOYEES } from "../actions/Types";

/** initialize the state */
const INITIAL_STATE = {
    employeeList: []

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_ALL_EMPLOYEES:
            return { ...state, employeeList: action.payload };
        default:
            return state;
    }
}