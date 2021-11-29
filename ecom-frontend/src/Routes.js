import React, {Fragment} from "react"
import Home from "./core/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";

const Routs = () => {
    return (
        <BrowserRouter>
     <Fragment>
            <Routes>

                <Route path="/"  element={<Home/>} />
                <Route path="/signup" exact element={<Signup/>} />
                <PrivateRoutes path="/user/dashboard" exact element={<UserDashboard/>} />

            </Routes>
          </Fragment>
        </BrowserRouter>
    )
}
export default Routs