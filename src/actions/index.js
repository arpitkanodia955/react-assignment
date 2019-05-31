import axios from 'axios';
import { BASE_URL } from '../common/constants';

/**
 * Register user action
 * @param data
 * @param callback
 * @returns {function(*)}
 */
export function getEmployeesList(callback) {
    const request = axios.get(`http://localhost:3001/employees`);
    return (dispatch) => {
        request.then((data) => {
            callback(data);
        })
        .catch(function (error) {
            callback(error.response);
        });
    }
}