import axios from "axios"
import { useState } from "react"

const useFetch = ( baseUrl ) => {
    const [product, setProduct ] = useState()
    const [ hasError, setHasError ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)

    const getProductById = (path) => {
        const url = `${baseUrl}${path}`
        setIsLoading(true)
        axios.get(url)
            .then(res => {
                setProduct(res.data)
                setHasError(false)
            })
            .catch(err => {
                console.log(err);
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }



    return [ product, getProductById, hasError, isLoading ]
}

export default useFetch

