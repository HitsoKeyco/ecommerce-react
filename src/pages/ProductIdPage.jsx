import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import ProductInfo from '../components/ProductId/productInfo'
import SimilarProducts from '../components/ProductId/SimilarProducts'
import SliderImgs from '../components/ProductId/SliderImgs'
import '../pages/styles/ProductId.css'
const ProductIdPage = () => {

    //capturamos el id de la ruta
    const { id }= useParams()
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const [product, getProductById ] = useFetch(baseUrl)

    useEffect(() => {
        getProductById(`/products/${id}`)
    }, [ id ])

    return (
        <>
        
        <div className='product_idPage_container'>
        
            <div className="productId_container">
                <SliderImgs 
                product = { product }
                />
                <ProductInfo product={ product } />
            </div>
            <SimilarProducts product={ product } />
        </div>
        </>
    )
}

export default ProductIdPage