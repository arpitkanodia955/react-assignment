import React, { Suspense } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
const EmployeeList = React.lazy(() => import("./components/EmployeeList"));
const EmployeeDetails = React.lazy(() => import("./components/EmployeeDetails"));

/**
 * @name customRoutes
 * @param {*}
 * @description creating custom routes for navigation
 */
const customRoutes = (props) => {
    return (
        <BrowserRouter>
            <Suspense fallback={<h2>Product list is loading...</h2>}>
                <Switch>
                    <Route exact path='/' component={EmployeeList} />
                    <Route path='/employee-details/:id' component={EmployeeDetails} />

                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default customRoutes;