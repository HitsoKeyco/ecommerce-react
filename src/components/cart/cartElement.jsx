import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteteProductThunk } from '../../store/slices/cart.slice'

const cartElement = ({ prod }) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteteProductThunk(prod.id))
    }
    return (
        <article>
            <header>
                <img src={prod.product.images[0].url} alt="" />
            </header>
            <section>
                <h3>{prod.product.title}</h3>
                <p><span>{prod.quantity}</span><span>${prod.product.price}</span></p>
                <button onClick={handleDelete}>
                <i style={{ fontSize: "2em",  cursor: "pointer" }} className='bx bxs-trash' ></i>
                </button>
            </section>
            <footer>
                <span>Subtotal</span><span>{prod.quantity * prod.product.price}</span>
            </footer>
        </article>
    )
}

export default cartElement