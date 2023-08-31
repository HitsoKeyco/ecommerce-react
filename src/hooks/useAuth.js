import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { stateUserThunk } from "../store/slices/userSlice"

const useAuth = () => {
    const dispatch = useDispatch()
    const [ hasError, setHasError ] = useState(false)
    const [ success, hasSuccess ] = useState(false)
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
                    hasSuccess(true)
                    dispatch(stateUserThunk(true))
                })
                .catch(err => {
                    console.log(err);                    
                    setHasError(true)
                })
        }
        return { createUser, loginUser, hasError, success }
}
export default useAuth