import React from 'react';
import { NavLink } from 'react-router-dom'
import cartImg from '../img/cart.png'

const Header = () => {
    return (
        <div className='Header'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <span className='main-links'>
                        <li className="nav-item"><NavLink className="nav-link" to="/">Главная</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/news">Новости</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/about">О нас</NavLink></li>
                    </span>
                    <li className="nav-item nav-img"><NavLink className="nav-link" to="/cart"><img src={cartImg} alt="cartImg"/></NavLink></li>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;