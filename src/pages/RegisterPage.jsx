import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import '../pages/styles/RegisterPage.css'

const RegisterPage = ({ setOpenModalRegister, setOpenLogin }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const { createUser } = useAuth()

    const submit = data => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
        createUser(url, data)
        reset(
            {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: ''
            }
        )

    }

    const handdleExitModal = () => {
        setOpenModalRegister(false)
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className='register' onClick={handdleExitModal}>

            <form className='register_form' onSubmit={handleSubmit(submit)} onClick={stopPropagation}>
                <div className='register_title'>
                    <h4 className='register_h4'>Register</h4>
                    <i className='bx bxs-user-plus' ></i>
                </div>
                <div className='component_container_register'>
                    <label className='register_label' htmlFor="firstName">First name</label>
                    <input
                        className='register_input'
                        {...register('firstName', { required: 'Este campo es obligatorio' })}
                        type="text"
                        id="firstName"
                    />
                    {errors.firstName && <p>{errors.firstName.message}</p>}
                </div>
                <div className='component_container_register'>
                    <label className='register_label' htmlFor="lastName">Last name</label>
                    <input 
                        className='register_input' 
                        {...register('lastName', { required: 'Este campo es obligatorio'})} 
                        type="text" 
                        id="lastName" 
                    />
                    {errors.lastName && <p>{errors.lastName.message}</p>}
                </div>
                <div className='component_container_register'>
                    <label className='register_label' htmlFor="email">Email</label>
                    <input 
                        className='register_input' 
                        {...register('email', { required: 'Este campo es obligatorio'})} 
                        type="text" 
                        id="email" 
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className='component_container_register'>
                    <label className='register_label' htmlFor="password">Password</label>
                    <input 
                        className='register_input' 
                        {...register('password', { required: 'Este campo es obligatorio'})} 
                        type="text" 
                        id="password"
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </div>
                <div className='component_container_register'>
                    <label className='register_label' htmlFor="phone">Phone</label>
                    <input 
                        className='register_input' 
                        {...register('phone', { required: 'Este campo es obligatorio'})} 
                        type="text" 
                        id="phone" 
                    />
                    {errors.phone && <p>{errors.phone.message}</p>}
                </div>
                <button className='button_register'>Submit</button>
            </form>
        </div>
    )
}

export default RegisterPage