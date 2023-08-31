import { createSlice } from '@reduxjs/toolkit';
import getConfigAuth from '../../utils/getConfigAuth';
import axios from 'axios';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCarG: (state, action) => action.payload,
        addProductCartG: (state, action) => [...state, action.payload],
        deleteProductCartG: (state, action) => {
            return state.filter(prod => prod.id != action.payload)
        }
    }
})

export const { setCarG, addProductCartG, deleteProductCartG } = cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart'

//THUNKS

export const  getCartThunk = () => (dispatch) => {
    const url = baseUrl
    axios.get(url, getConfigAuth())
        .then(res => dispatch(setCarG(res.data)))
        .catch(err => err)
}

export const postCartThunk = (prod, quantity = 1) => (dispatch) => {
    const url = baseUrl
    const data = {
        quantity,
        productId: prod.id
    }
    axios.post(url, data, getConfigAuth())
        .then(res => {
            const obj = {
                ...res.data,
                product: prod
            }
            console.log(obj)
            dispatch(addProductCartG(obj))
        })
        .catch(err => console.log(err))
}

export const deleteteProductThunk = ( id ) => (dispatch) => {
    const url = `${baseUrl}/${id}`
        axios.delete(url, getConfigAuth())
            .then(res => {
                
                dispatch(deleteProductCartG(id))
            })
            .catch(err => err)
}

