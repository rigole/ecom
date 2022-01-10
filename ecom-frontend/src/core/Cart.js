import React, {useState, useEffect} from "react";
import Base from "../core/Base";
import Card from "./Card";
import {loadCart} from "./helperJS/cartHelper";
import PaymentBraintree from "./PaymentBraintree";
export const Cart =() => {
// TODO `remove add to cart when added to cart`  //Done
    const [reload, setReload] = useState(false)
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = (products) => {
        return (
            <div>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addToCart={false}
                        reload={reload}
                        setReload={setReload}
                    />
                ))}
            </div>
        )
    }

      const loadCheckout = () => {
        return (
            <div>
                <h1>Checkout</h1>
            </div>
        )
    }


    return(
        <Base title="Cart page" description="Welcome to checkout">
         <div className="row text-center">
             <div className="col-6">
                 {loadAllProducts(products)}
             </div> 
             <div className="col-6">
                 {products.length > 0 ?
                     (
                         <PaymentBraintree products={products} setReload={setReload}/>
                     )
                     :
                     (
                         <h3>Please login or Add something to your cart</h3>
                     )
                 }
             </div>
         </div>
        </Base>
    )
}