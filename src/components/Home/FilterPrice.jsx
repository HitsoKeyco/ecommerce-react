import React from 'react'
import { useForm } from 'react-hook-form'
import '../Home/styles/FilterPrice.css'

const FilterPrice = ({ setPriceMinMax, priceMinMax }) => {

    const { register, reset, handleSubmit } = useForm()

    const submit = (data) => {
        const min = data.from.trim() === "" ? 0 : + data.from
        const max = data.to.trim() === "" ? Infinity : +data.to
        setPriceMinMax({ min, max })
    }

    const hadleClearFilter = () => {
        setPriceMinMax({ min: 0, max: Infinity })
        reset({
            from: "",
            to: ""
        })
    }
    return (
        <article>
            <h3 className='filter_price_text'>Price</h3>
            <form className='form_filter' onSubmit={handleSubmit(submit)}>
                <div className='container_input_filter'>
                    <label className='filter_label' htmlFor="min">Min Price</label>
                    <input className='filter_input' {...register('from')} type="number" id="min" placeholder='min' name='min' />
                </div>
                <div className='container_input_filter'>
                    <label className='filter_label' htmlFor="max">Max Price</label>
                    <input className='filter_input' {...register('to')} type="number" id="max" name='max' placeholder='max' />
                </div>
                <button className='btn_filter'>Filter Price</button>
            </form>
            {
                priceMinMax.min !== 0 || priceMinMax.max !== Infinity
                    ? <div className='container_notification_filter_price'>From {priceMinMax.min} to {priceMinMax.max} <div className='close_filter'><i onClick={hadleClearFilter} className='bx bx-checkbox-minus' ></i></div> </div>
                    : ''
            }
        </article>

    )
}

export default FilterPrice