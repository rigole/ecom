import React, {useState, useEffect} from "react";
import Base from "../core/Base";
import Card from "./Card";
import {loadCart} from "./helperJS/cartHelper";
export const Cart =() => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(loadCart())
    }, [])
    const loadAllProducts = (products) => {
        return (
            <div>
                {products.map((product, index) => (
                    <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addToCart1={false}
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
                 {loadCheckout()}
             </div>
         </div>
        </Base>
    )
}