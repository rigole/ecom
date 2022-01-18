import Base from "../components/Base";
import React, {useState} from "react";
import {Link, Navigate} from "react-router-dom";
import TextField from "@mui/material/TextField";
import IconButton from '@mui/material/IconButton';
import FormControl from "@mui/material/FormControl";
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import {signin, authenticate, isAuthenticated } from "../auth/helper";

const Signin = () => {

    const [values, setValues] = useState({
        name:"",
        email:"foplacide@gmail.com",
        password:"123",
        error:"",
        success: false,
        loading: false,
        didRedirect: false,
        showPassword: false
    })

    const handleClickShowPassword = () => {
      setValues({
          ...values,
          showPassword: !values.showPassword,
      })
    }

    const handleMouseDownPassword = (event) =>{
        event.preventDefault()
    }

    const { name, email, password, error, success, loading, didRedirect } = values
    const handleChange = (name) =>
        (event) => {
            setValues({...values, error:false, [name]: event.target.value })
        }


    const onSubmit = (event) => {
        event.preventDefault()
        setValues({...values, error: false, loading: true})
        signin({ email, password })
            .then(data => {
                console.log("DATA", data)
                if (data.token){
                    //let sessionToken = data.token
                    authenticate(data, () => {
                        console.log("Token added")
                        setValues({
                            ...values,
                            didRedirect: true,
                        })
                    })
                } else {
                    setValues({
                        ...values,
                        loading: false,
                    })
                }
            })
            .catch((err) => console.log(err))
    }
    
    const performRedirect = () => {
        if (isAuthenticated()){
            return <Navigate to="/"  />
        }
    }

    const loadingMessage = () => {
        return (
            loading && (
                <div className="alert alert-info">
                    <h2>Loading...</h2>
                </div>
            )
        )
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
                            <FormControl fullWidth sx={{ m: 1}}>
                                 <TextField
                                     id="outlined-basic"
                                     label=""
                                     color="success"
                                     focused
                                     variant="outlined"
                                     value={email}
                                     onChange={handleChange("email")}
                                 />
                            </FormControl>
                            <FormControl fullWidth sx={{ m: 1}}>
                                  <InputLabel>Paasword</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}

                                        onChange={handleChange('password')}
                                        endAdornment={
                                         <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                                  {values.showPassword ? <VisibilityOff /> : <Visibility />}

                                            </IconButton>
                                         </InputAdornment>
                                        }
                                   />

                            </FormControl>

                            <button
                                className="btn btn-success btn-block"
                                onClick={onSubmit}
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
            {loadingMessage()}
            {SignInForm()}
            <p className="text-center">
                {JSON.stringify(values)}
            </p>
            {performRedirect()}
        </Base>
    )
}

export default Signin