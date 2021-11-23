import React from 'react'


const ImageHelper = ({product}) => {
    const imageUrl = product ? product.image : `https://www.pexels.com/fr-fr/photo/moniteur-d-ordinateur-a-ecran-plat-noir-1714208/`
    return (
        <div className="rounded border border-success p-2">
            <img src={imageUrl}
             style={{maxHeight:"100%", maxWidth: "100%"}}
             className="mb-3 rounded"
             alt=""
            />
        </div>
    )
}