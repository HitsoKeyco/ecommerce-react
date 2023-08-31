import React from 'react'
import '../Home/styles/CardProduct.css'
import { useNavigate } from 'react-router-dom'
import { postCartThunk } from '../../store/slices/cart.slice'
import { useDispatch } from 'react-redux'
const CardProduct = ({ prod }) => {

    const navigate = useNavigate()

    const handleNavigateDetail = () => {
        navigate(`/product/${prod.id}`)
    }

    const dispatch = useDispatch()

    const handleAddCart = (e) => {
        e.stopPropagation()
        dispatch(postCartThunk(prod))
    }

    return (
        <>
        <article className='product' onClick={handleNavigateDetail}>
            <header className='product_header'>
                <div className="product_img_container">
                    <img className='product_img' src={prod.images[0].url} alt="" />
                </div>
                <div className="product_img_container">
                    <img className='product_img' src={prod.images[1].url} alt="" />
                </div>
            </header>
            <section className='product_body'>
                <header className='product_titles'>
                    <h3 className='product_brand'>{prod.brand}</h3>
                    <h1 className='product_name'>{prod.title}</h1>
                </header>
                <article className='product_info_value'>
                    <span className='product_price_label'>Price</span>
                    <h3 className='product_price_value'>{prod.price}</h3>
                </article>
                <button className='product_btn' onClick={handleAddCart}>
                    <i className='bx bx-cart-alt'></i>
                </button>
            </section>
        </article>
        </>
    )
}

export default CardProduct