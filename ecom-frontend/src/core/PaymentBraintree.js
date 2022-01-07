import React, {useState, useEffect} from "react";
import {Navigate, Redirect} from "react-router-dom";
import {cartEmpty} from "./helperJS/cartHelper";
import {getmeToken, processPayment} from "./helperJS/paymentHelper";
import {createOrder} from "./helperJS/orderHelper";
import {isAuthenticated, signout} from "../auth/helper";
import DropIn from "braintree-web-drop-in-react";
import {parse} from "query-string";
import {observe} from "web-vitals/dist/modules/lib/observe";

// TODO `Every where there is a console log I should create a components to render all of them`


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
        instance: {},
    })


    const userId = isAuthenticated && isAuthenticated().user.id
    const token = isAuthenticated && isAuthenticated().token
    const updateInfo ={}

    const getToken = (userId, token) => {
            getmeToken(userId, token)
                .then((info) => {

                    if(info.error ){
                        setInfo({
                            ...info,
                            error: info.error
                        })
                        signout(() =>{
                            return <Navigate to="/"/>
                        })
                    } else {

                        const clientToken = info.clientToken
                        setInfo({
                            ...info,
                            clientToken
                        })
                    }
                })
    }

    useEffect(() => {
        getToken(userId, token)
    }, []);

    const getAmount = () => {
        let amount = 0
        products.map((p) => {
            amount = amount + parseInt(p.price)
        })
        return amount;

    }

    const onPurchase = () => {
        setInfo({
            ...info,
            loading: true
        })
        let nonce;

        let getNonce = info.instance.requestPaymentMethod()
            .then( data => {
                nonce = data.nonce
                const paymentData = {
                    PaymentMethodNonce: nonce,
                    amount: getAmount()
                }
                processPayment(userId, token, paymentData)
                    .then((response) => {
                        if(response.error) {
                            if (response.code == '1'){
                                console.log("Payment Failed")
                                signout(() => {
                                    return <Navigate to="/" />
                                })
                            }
                        }else {
                            setInfo({...info,
                                 success: response.success, loading: false
                            })
                            console.log("PAYMENT SUCCESS")
                            let product_names = ""
                            products.forEach(function(item){
                                product_names += item.name + ", "
                            })
                            const orderData = {
                                products: product_names,
                                transaction_id: response.transaction.id,
                                amount: response.transaction.amount
                            }
                              createOrder(userId, token, orderData)
                            .then(response => {
                                if (response.error){
                                    if(response.code == "1"){
                                        console.log("ORDER FAILED")
                                    }
                                    signout(() => {
                                        return <Navigate to="/"/>
                                    })
                                }else {
                                    if (response.success === true){
                                        console.log("ORDER PLACED")
                                    }
                                }
                            })
                            .catch(error =>{
                                setInfo({loading: false, success: false})
                                console.log("ORDER FAILED", error)
                            })
                            cartEmpty(() => {
                                console.log("Cart is Emptied out")
                            })

                            setReload(!reload)
                        }

                })
                    .catch((error )=> console.log(error))
            })
            .catch(error => console.log("Nonce", error))
    }

    const showbtnDropIn = () => {
            return (
                <div>
                    {
                        info.clientToken !== null && products.length > 0 ?
                            (
                                 <div>
                                    <DropIn
                                    options={{authorization: info.clientToken}}
                                    onInstance={(instance) => (info.instance = instance)}
                                    >
                                         </DropIn>
                                        <button
                                            className="btn btn-block btn-success"
                                            onClick={onPurchase}
                                        >
                                            Pay now
                                        </button>

                                </div>
                            ) :
                            (
                                   <h3>Please login or Add something to your cart</h3>
                            )

                    }

                </div>
            )
    }
    return (
        <div>
            <h3>Your bill is $ {getAmount()}</h3>
            {showbtnDropIn()}
        </div>
    )
}

export default PaymentBraintree