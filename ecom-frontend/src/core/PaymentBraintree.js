import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";
import {cartEmpty} from "./helperJS/cartHelper";
import {getmeToken, processPayment} from "./helperJS/paymentHelper";
import {createOrder} from "./helperJS/orderHelper";
import {isAuthenticated, signout} from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";

const PaymentBraintree = ({
    products,
    reload = undefined,
    setReload = (f) => f,
      }) => {

        const [info, setInfo] = useState({
            loading: false,
            success: false,
            clientToken: null,
            error: "",
            instance: {}
        })

    const userId = isAuthenticated && isAuthenticated().user.id
    const token = isAuthenticated && isAuthenticated().token

    const getToken = (userId, token) => {
            getmeToken(userId, token)
                .then(info => {
                    if(info.error){
                        setInfo({
                            ...info,
                            error: info.error
                        })
                        signout(() =>{
                            return <Redirect to="/"/>
                        })
                    } else {
                        const clientToken = info.clientToken
                        setInfo({clientToken})
                    }
                })
    }

    return (
        <div>
            <h1>Payment Braintree</h1>
        </div>
    )
}

export default PaymentBraintree