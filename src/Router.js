import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import EmployeeDetails from "./components/EmployeeDetails";


/**
 * @name customRoutes
 * @param {*}
 * @description creating custom routes for navigation
 */
const customRoutes = (props) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={EmployeeList} />
                <Route path='/employee-details/:id' component={EmployeeDetails} />

            </Switch>
        </BrowserRouter>
    )
}

export default customRoutes;