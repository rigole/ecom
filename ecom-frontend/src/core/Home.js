import React, {useState, useEffect} from 'react'
import Base from "./Base"
import {getProducts} from "./helperJS/coreapicalls";

export default function Home(){
    const [products, setProducts] =  useState([])
    const [error, setError] =  useState(false )

    const loadAllProducts = () => {
      getProducts()
          .then((data) =>{
              if (data.error){
                  setError(data.error)
                  console.log(error)
              } else {
                  setProducts(data)
              }
          })
          .catch(err => console.log(err))
    }

    useEffect(() => {
        loadAllProducts()
    }, [])

    return (
        <Base title="Home Page" description=" Welcome to Tech Store">
            <h1>Home component</h1>
            <div className="row">
                {products.map( (product, index) => {
                    return(

                        <div key={index}>
                            <h1>{product.name}</h1>
                        </div>
                    )
                })}
            </div>
        </Base>
    )
}