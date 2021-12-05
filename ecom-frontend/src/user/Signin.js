import Base from "../core/Base";
import React, {useState} from "react";
import {Link} from "react-router-dom";

const Signin = () => {

    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
        error:"",
        success: false,
        loading: false,
        didRedirect: false
    })


    const { name, email, password, error, success, loading, didRedirect } = values
    const handleChange = (name) =>
        (event) => {
            setValues({...values, error:false, [name]: event.target.value })
        }

     const successMessage = () => {
            return (
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <div
                            className="alert alert-success"
                            style={{display: success ? "" : "none" }}

                        >
                              New account created successfully. Please
                            <Link to="/signin">login now</Link>

                        </div>
                    </div>
                </div>
            )
        }

     const errorMessage = () => {
            return (
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <div
                            className="alert alert-danger"
                            style={{display: error ? "" : "none" }}

                        >
                              Error while creating new user. Check fields again and Please try again
                        </div>
                    </div>
                </div>
            )
        }

     const SignInForm = () => {
            return(
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <form action="">

                            <div className="form-group">
                                <label className="text-light">Email</label>
                                <input
                                    className="form-control"
                                    value={email}
                                    onChange={handleChange("email")}
                                    type="email"
                                />
                            </div>
                            <div className="form-group">
                                <label className="text-light">password</label>
                                <input
                                    className="form-control"
                                    value={password}
                                    onChange={handleChange("password")}
                                    type="password"
                                />
                            </div>
                            <button
                                className="btn btn-success btn-block"
                                onClick={() => {}}
                            >
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            )
        }








    return (
        <Base title=" Welcome to sign in page" description=" A t-shirt store">
            {SignInForm()}
            <p className="text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signin