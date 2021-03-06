import React, {Fragment} from "react"
import Home from "./components/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Signup from "./user/Signup";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashboard from "./user/UserDashboard";
import Signin from "./user/Signin";
import {Cart} from "./components/Cart";

const Routs = () => {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/"  element={<Home/>} />
                <Route path="/signup" exact element={<Signup/>} />
                <Route path="/signin" exact element={<Signin/>} />
                 <Route path="/cart" exact element={<Cart/>} />
                <Route exact path="/user/dashboard"   element ={<PrivateRoutes/>}>
                      <Route exact path="/user/dashboard" element={<UserDashboard/>}/>
                </Route>


            </Routes>

        </BrowserRouter>
    )
}
export default Routs