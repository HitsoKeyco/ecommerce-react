import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getAllProductsThunk } from '../../store/slices/products.slice'
import { useDispatch } from 'react-redux'
import '../Home/styles/FilterCategory.css'

const FilterCategory = () => {
    const baseUrl = `https://e-commerce-api-v2.academlo.tech/api/v1/`
    const [ category, getAllCategory] = useFetch(baseUrl)

    useEffect(() => {
        getAllCategory('/categories')

    },[])

    const dispatch = useDispatch()

    const handleFilterCategory = (id) => {
        if(id){
        const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
        dispatch(getAllProductsThunk(url))
        }else{
            dispatch(getAllProductsThunk())
        }
    };

    return (
        <article className='container_filter_category'>
            <h3 className='filter_tilte_category'>Category</h3>
            <ul>
                <li className='filter_li_option' onClick={() => handleFilterCategory()}>All Categories</li>
                {
                    category?.map(category => (
                        <li className='filter_li_option'
                        onClick={() => handleFilterCategory(category.id)}
                        key={category.id}>
                            {category.name}
                        </li>
                    ))
                }
            </ul>
        </article>
    )
}

export default FilterCategory