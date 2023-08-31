import React, { useState } from 'react'
import '../ProductId/Styles/ProductInfo.css'
import { postCartThunk } from '../../store/slices/cart.slice';
import { useDispatch } from 'react-redux';

const productInfo = ({ product }) => {
    const [quantity, setquantity] = useState(1)

    const handleAdd = () => {
        setquantity(quantity + 1)
    }

    const handleMinus = () => {
        if(quantity - 1 >= 1)
        setquantity(state => state - 1)
    }
    
    const dispatch = useDispatch()

    const handleAddToCart = () => {
        dispatch(postCartThunk(product, quantity))
    }
    
    return (
        <article className='product_info_container'>
            <h3 className='prouct_info_brand'>{product?.brand}</h3>
            <h2 className='product_info_title'>{product?.title}</h2>
            <p className='product_info_description'>{product?.description}</p>
            <footer className='product_info_footer'>
                <ul className='product_info_ul'>
                    <li className='product_info_li_1'>
                        <span className='product_info_title_price'>Price</span>
                        <span className='product_info_price'> $ {product?.price}</span>
                    </li>
                    <li className='product_info_li_2'>
                        <span className='product_info_title_quantity'>Quantity</span>
                        <div className='product_info_handle_opcion'>
                            <div className='product_info_handle_minus handle_quantity' onClick={handleMinus}><i className='bx bx-minus'></i></div>
                            <div className='product_info_quantity handle_quantity'>{quantity}</div>
                            <div className='product_info_handle_plus handle_quantity' onClick={handleAdd}><i className='bx bx-plus' ></i></div>
                        </div>
                    </li>
                </ul>
                <button className='button_add_cart' onClick={handleAddToCart}>Add to cart <i className='bx bx-cart-alt'></i></button>
            </footer>
        </article>
        
    )
}

export default productInfo