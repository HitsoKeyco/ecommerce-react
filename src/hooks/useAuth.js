import axios from "axios"
import { useState } from "react"

const useAuth = () => {

    const [ hasError, setHasError ] = useState(false)
    
    

        //POST
        const createUser = ( url, data ) =>{            
            axios.post(url, data)
                .then(res => console.log(res.data))
                .catch(err => console.log(err))
        }

        

        const loginUser = ( url, data ) =>{            
            axios.post(url, data)
                .then(res => {                    
                    localStorage.setItem("token", res.data.token)
                    localStorage.setItem("user", JSON.stringify(res.data.user))
                })
                .catch(err => {
                    console.log(err);                    
                    setHasError(true)
                })
        }
        return { createUser, loginUser, hasError}
}
export default useAuth