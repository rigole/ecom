import React, { Component } from 'react'
import {Routes, Navigate, Outlet} from "react-router-dom";

import {isAuthenticated} from "./index";
import Signup from "../../user/Signup";
import UserDashboard from "../../user/UserDashboard";
import Signin from "../../user/Signin";


const PrivateRoutes = ({ children }) =>
{
   const auth = isAuthenticated()
    return (

     auth ? <Outlet /> : <Navigate to="/signin"/>

        /*<Routes
          {...rest}
            render={(props) =>
                isAuthenticated()
                    ? (
                   <Component {...props} />
                )
                    :
                    (
                            <Navigate
                                to={{
                                    pathname: "/signin",
                                    state: { from: props.location},
                                }}
        />
                    )

            }
        />*/

    )


}

export default PrivateRoutes