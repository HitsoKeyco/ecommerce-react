import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../shared/style/Header.css';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';

const Header = () => {

    // Control de Link Login Nav
    const [openLogin, setOpenLogin] = useState(false);
    const handdleModalLogin = () => {
        setOpenLogin(!openLogin)
        setOpenModalRegister(false)
        setIsNavOpen(false)
    }

    //----------- Login--------------------
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setIsLogin(true);
        }
    }, []);


    //-----------------MAnejo de Menu en dispositivos pequeños -----------------
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleMenu = () => {
        setIsNavOpen(!isNavOpen)
        setOpenModalRegister(false)
    };


    //control de link registro Nav
    const [openModalRegister, setOpenModalRegister] = useState(false)
    const handdleRegisterLink = () => {
        setOpenLogin(false)
        setOpenModalRegister(!openModalRegister)
        setIsNavOpen(false)
    }

    return (
        <>
            <header className='header'>
                <Link to='/' className='nav_text_logo'>
                    TECNOMANIA store
                </Link>
                <nav className={`header_nav  ${isNavOpen ? 'header_nav_show' : ''}`}>
                    <i onClick={handleMenu} className='bx bx-x'></i>
                    <ul className='header_nav_ul'>
                        <li className='header_nav_li'>
                            <Link onClick={handleMenu} to='/' className='nav_text'>
                                Products
                            </Link>
                        </li>
                        {isLogin ? (
                            <>
                                <li className='header_nav_li'>
                                    <Link onClick={handleMenu} to='/purchases' className='nav_text'>
                                        Purchases
                                    </Link>
                                </li>
                                <li className='header_nav_li'>
                                    <Link onClick={handleMenu} to='/cart' className='nav_text'>
                                        <i className='bx bx-cart-alt'></i>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className='header_nav_li'>
                                    <span onClick={handdleRegisterLink} className='nav_text' href="">Register</span>
                                </li>

                            </>
                        )}

                        <li className='header_nav_li'>
                            <Link onClick={handdleModalLogin} className='nav_text'>
                                <i className='bx bx-user-circle'></i>
                                <p className='login_menu_text'> Login</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <i onClick={handleMenu} className='bx bx-menu'></i>
            </header>
            {
                openLogin ?
                    <LoginPage setOpenLogin={setOpenLogin} setIsNavOpen={setIsNavOpen} />
                    : ''
            }

            {
                openModalRegister ?
                    <RegisterPage setOpenModalRegister={setOpenModalRegister} />
                    : ''
            }
        </>
    );
};

export default Header;
