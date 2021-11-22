import React from "react"
import Home from "./core/Home";
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Routs = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"  element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routs