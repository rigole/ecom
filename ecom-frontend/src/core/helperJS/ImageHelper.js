import React from 'react'


const ImageHelper = ({ product }) => {
    const imageUrl = product ? product.image : `https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fm=jpg`
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

export default ImageHelper