import React, {useState} from 'react'
import ImageHelper from "./helperJS/ImageHelper";
import { Navigate } from "react-router-dom";
import {addItemToCart, removeItemFromCart} from "./helperJS/cartHelper";
import { isAuthenticated } from "../auth/helper";

const Card = ({
                  product,
                  addToCart1 = true,
                  removeFromCart = false,
              }) => {


        const [redirect, setRedirect] = useState(false)

         const cartTitle = product ? product.name : "A photo pexels"
         const cartDescription = product ? product.description : "A photo pexels"
         const cartPrice = product ? product.price : "Default"

        const addToCart = () => {
          if (isAuthenticated()) {
              addItemToCart(product, ()=> setRedirect(true))
                console.log("Added to cart")
          } else {
              console.log("Login Please!")
          }
        }

        const getARedirect = (redirect) => {
             if (redirect) {
                 return <Navigate to="/cart"/>
             }
        }

        const showAddToCart = addToCart => {
             return(
                    addToCart && (
                        <button
                            onClick={addToCart}
                            className="btn btn-block btn-outline-success mt-2 mb-2"
                        >
                                Add to Cart

                            </button>
                    )
             )
        }

        const showRemoveFromCart = (removeFromCart) => {
             return (
                 removeFromCart && (
                      <button
                      onClick={() => {
                          removeItemFromCart(product._id)
                          console.log("Product removed from cart ")
                      }}
                      className=" btn btn-block btn-outline-danger mt-2 mb-2"
                  >
                                Remove from Cart

                  </button>
                 )

             )
        }
        return (
            <div className="card text-white bg-dark border border-info">
                <div className="card-header lead">{cartTitle}</div>
                <div className="card-body">
                    {getARedirect(redirect)}
                  <ImageHelper product={product}/>
                    <p className="lead bg-success font-weight-normal text-wrap">
                        {cartDescription}
                    </p>
                    <p className="btn btn-success rounded btn-sm px-4">{cartPrice} XAF</p>
                    <div className="row">
                        <div className="col-12">
                            {showAddToCart(addToCart)}
                        </div>
                        <div className="col-12">
                             {showRemoveFromCart(removeFromCart)}
                        </div>
                    </div>
                </div>
            </div>
        )
}
export default Card

