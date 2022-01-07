import {API} from "../../backend";

export const createOrder = (userId, token, orderData) => {
    const formData = new FormData()

    for(const name in orderData){
        formData.append(name, orderData[name])
    }

    return fetch(`http://127.0.0.1:8000/api/order/add/${userId}/${token}/`, {
        method: "POST",
        body: formData
    })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}