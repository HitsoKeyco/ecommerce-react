import React, { useEffect } from 'react'
import CardProduct from '../Home/CardProduct';
import useFetch from '../../hooks/useFetch';
import '../ProductId/Styles/SimilarProducts.css'


const SimilarProducts = ({ product }) => {

  const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'
  const [productByCategory, getProductByCategory] = useFetch(baseUrl)

 //products es undefined al inicio luego useEfect se renderiza por primera vez
 //luego espera que product tenga valor luego se ejecuta el usEffect pregunta si product
 //tiene valor entonces manda la peticion por categoria que tiene el producto a quien se le hizo click

  useEffect(() => {
    if(product){
    getProductByCategory(`/products?categoryId=${product.category.id}`)
  }
  }, [product])


  return (
    <div className='container_products_similar'>
      

      <div className='container_products'>
        <h4 className='text_similar_products'>Similar Products</h4>
        {
          //
          productByCategory?.map(prod => {
            if(product.id !== prod.id){
              return (<CardProduct 
              key={prod.id}
              prod={prod}
            />)}
          })
        }
      </div>

    </div>
  )
}

export default SimilarProducts