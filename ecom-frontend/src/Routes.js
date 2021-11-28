import React from "react"
import Home from "./core/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import PrivateRoutes from "./auth/helper/PrivateRoutes";

const Routs = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
                {/*<PrivateRoutes path="/user/dashboard" exact component={}/>*/}
            </Routes>
        </BrowserRouter>
    )
}
export default Routs