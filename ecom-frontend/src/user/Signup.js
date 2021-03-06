import React, {useState} from "react";
import Base from "../components/Base";
import {Link} from "react-router-dom";
import {signup} from "../auth/helper";

const Signup = () => {

    const [values, setValues] = useState({
        name: "",
        email: "" ,
        error: "",
        success: false,
    })
    const { name, email, password, error, success } = values
    const handleChange = (name) =>
        (event) => {
            setValues({...values, error:false, [name]: event.target.value })
        }

        const onSubmit = (event) => {
            event.preventDefault()
            setValues({...values, error: false})
            signup({name, email, password})
                .then((data) => {
                   if(data.email === email){
                       setValues({
                           ...values,
                           name: "",
                           email: "",
                           password: "",
                           error: "",
                           success: true
                       })
                   } else {
                       setValues({
                           ...values,
                           error: true,
                           success: false
                       })
                   }
                })
                .catch((e) => console.log(e))
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

        const SignUpForm = () => {
            return(
                <div className="row">
                    <div className="col-md-6 offset-sm-3 text-left">
                        <form action="">
                            <div className="form-group">
                                <label className="text-light">Name</label>
                                <input
                                    className="form-control"
                                    value={name}
                                    onChange={handleChange("name")}
                                    type="text"
                                />
                            </div>
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
                                onClick={onSubmit}
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )
        }

    return (
        <Base title="Sign Up Page" description="A signup for LCO user">
            {successMessage()}
            {errorMessage()}
            {SignUpForm()}
            <p className="text-white text-center">
                {JSON.stringify(values)}
            </p>
        </Base>
    )
}

export default Signup