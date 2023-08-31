import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import '../pages/styles/LoginPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { stateModalThunk } from '../store/slices/stateModal.slice'
import { stateUserThunk } from '../store/slices/userSlice'

const LoginPage = ({ setOpenLogin, setLogingRenderNav }) => {
    const dispatch = useDispatch()
    const userLoginState = useSelector( state => state.user)

    const userData = JSON.parse(localStorage.getItem('user'));

    const { register, reset, handleSubmit, formState: { errors } } = useForm()    
    const { loginUser, createUser, hasError, success } = useAuth()

    // Control de renderizado 
    const [isLogin, setIsLogin] = useState();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true);
            
        }
    }, []);

    useEffect(() => {
        if(success){
            setOpenLogin(false)
            setLogingRenderNav(true)
        }
    }, [success])

    

    // Controlador de mensaje de error
    const [showError, setShowError] = useState();

    useEffect(() => {
        if (hasError) {
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 3000);
        }
    }, []);

    // Control de submit
    const submit = (data) => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users/login'
        loginUser(url, data)
        reset(
            {
                password: ''
            }
        )
    }


    const submitLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setOpenLogin(false)
        setLogingRenderNav(false)
        dispatch(stateUserThunk(false))
        

        
    }

    const registerLink = () => {
    }

    const exitModalBackdrop = () => {
        setOpenLogin(false)
    }

    const stopPropagation = (e) => {
        e.stopPropagation()
    }

    return (
        <div className="backdrop" onClick={exitModalBackdrop}>
            <div className='login_container'>
                <div className='login'>
                    {
                        isLogin ?
                            (
                                <form onSubmit={handleSubmit(submitLogOut)} onClick={stopPropagation}>
                                    <i className='bx bx-user'></i>
                                    <div className="login_user">
                                        <ul>
                                            <li>Bienvenido {userData.firstName}</li>
                                        </ul>
                                        <button onClick={submitLogOut} className='button_login'>Log out</button>
                                    </div>
                                </form>
                            )
                            :
                            (
                                <form onSubmit={handleSubmit(submit)} onClick={stopPropagation}>
                                    <i className='bx bx-user'></i>
                                    <div className='login_container_email'>
                                        <label className='login_label' id='email' name='email' htmlFor="email">Email </label>
                                        <input
                                            className='login_input'
                                            {...register('email', { required: 'Este campo es obligatorio' })}
                                            type="email" id='email'
                                            autoComplete='on'
                                            name='email'
                                        />
                                        {errors.email && <p>{errors.email.message}</p>}
                                    </div>
                                    <div className='login_container_password'>
                                        <label className='login_label' id='password' name='password' htmlFor="password">Password </label>
                                        <input
                                            className='login_input'
                                            {...register('password', { required: 'Este campo es obligatorio' })}
                                            type="password"
                                            id='password'
                                            autoComplete='on'
                                            name='password'
                                        />
                                        {errors.password && <p>{errors.password.message}</p>}
                                    </div>
                                    <button className='button_login'>Login</button>
                                    <span className='haserror'>{hasError ? '¡credenciales invalidas!' : ''}</span>
                                    <span className='register_link_login' onClick={registerLink}><a className='resgister_link'>¿Registrarse?</a></span>
                                </form>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginPage