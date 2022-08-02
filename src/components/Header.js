import React from 'react';
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
    return (
        <div className='Header'>
            <nav className='navbar'>
                <ul className='navbar-nav'>
                    <li className="nav-item"><NavLink className="nav-link" to="/">Главная</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/news">Новости</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/about">О нас</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link" to="/cart">Корзина</NavLink></li>
                </ul>
            </nav>
        </div>
        
    );
};

export default Header;