import React from "react";
import {Link, Navigate, NavLink, withRouter} from "react-router-dom";
import Signin from "../user/Signin";
import {signout, isAuthenticated} from "../auth/helper"


const currentTab = (history, path) => {

}
const Menu = ({history, path}) => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Django-React</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/signin">Signin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                         <li className="nav-item">
                            <Link className="nav-link" to="/user/dashboard">DashBoard</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                         <Link className="nav-link" to="/signin">Cart</Link>
                         <Link onClick={() => {
                             signout(() => {
                                 history.push("/")
                             })
                         }} className="nav-link" to="/">
                             Signout
                         </Link>

                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Menu