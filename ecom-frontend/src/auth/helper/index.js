import {API} from "../../backend";
import {cartEmpty} from "../../core/helperJS/cartHelper";


export const signup = user => {
    return fetch (`${API}user/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => console.log(error))
}

export const signin = user => {
    const formData = new FormData()

    for (const name in user){
        formData.append(name, user[name])
    }

    /*const {email, password} = user
    formData.append('email', email)
    formData.append('password', password)*/

    for (let key of formData.keys()){
        console.log("My Key: ", key)
    }



    return fetch(`${API}user/login/`, {
        method: "POST",
        body: formData
    })
        .then( (response) => {
            console.log("SUCCESS", response)
            return response.json()
        })
        .catch((error) => console.log(error))
}

export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () => {
    if (typeof window === undefined) {
        return false
    }
    if (localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    } else {
        return false
    }
}
export const signout = (next) => {
    /*let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json')
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000')
    headers.append('Access-Control-Allow-Credentials', 'true')*/
    const userId = isAuthenticated() && isAuthenticated().user.id

    if(typeof window !== undefined){
        localStorage.removeItem("jwt")
        cartEmpty(() => {})


        return fetch(`${API}user/logout/${userId}`, {
            method: "GET",
        })
            .then((response) => {
                console.log("Signout success")
                next()
            })
            .catch(error => console.log(error))
    }
}
