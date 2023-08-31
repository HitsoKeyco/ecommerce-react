
import { useDispatch, useSelector } from 'react-redux'
import CardElement from '../components/cart/cartElement'
import usePurchase from '../hooks/usePurchase'
import { setCarG } from '../store/slices/cart.slice'
const CartPages = () => {

const cart = useSelector(states => states.cart)

const totalPrice = cart.reduce((acc, cv) => {
  const subtotal = cv.quantity * cv.product.price
  return acc + subtotal
}, 0)

const { makePurchase } = usePurchase()

const dispatch = useDispatch()
const handlePurchase = () => {
  makePurchase()
  dispatch(setCarG([]))
}


  return (
    <>
    <div>CartPages</div> 
    <div>
      {
        cart.map(prod => (
          <CardElement 
            key={prod.id}
            prod={prod}
          />
        ))
      }
    </div>
    <footer>
      <div>
        <span>Total:</span><span>{totalPrice}</span>
      </div>
      <button onClick={handlePurchase}>Purchase</button>
    </footer>
    </>
  )
}

export default CartPages  