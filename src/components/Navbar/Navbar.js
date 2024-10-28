import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useRef } from 'react';

import styles from './Navbar.module.scss';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import nav_dropdown from '../../assets/nav_dropdown.png';

import { ShopContext } from '../../context/ShopContext';

const cx = classNames.bind(styles);

function Navbar() {
    const { menu, setMenu, getTotalCartItem } = useContext(ShopContext);
    const menuRef = useRef();
    const navigate = useNavigate();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle(styles['nav-menu-visible']);
        e.target.classList.toggle(styles['open']);
    };

    return (
        <nav className={cx('navbar')}>
            <div className={cx('nav-logo')}>
                <img
                    onClick={() => {
                        setMenu('home');
                        navigate('/');
                    }}
                    src={logo}
                    alt=""
                />
                <p
                    onClick={() => {
                        setMenu('home');
                        navigate('/');
                    }}
                >
                    JENA SHOP
                </p>
            </div>
            <img src={nav_dropdown} alt="" className={cx('nav-dropdown')} onClick={dropdown_toggle} />
            <ul ref={menuRef} className={cx('nav-menu')}>
                <li
                    onClick={() => {
                        navigate('/');
                        setMenu('home');
                    }}
                >
                    Home
                    {menu === 'home' ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu('mens');
                        navigate('/mens');
                    }}
                >
                    Men
                    {menu === 'mens' ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu('womens');
                        navigate('/womens');
                    }}
                >
                    Women
                    {menu === 'womens' ? <hr /> : <></>}
                </li>
                <li
                    onClick={() => {
                        setMenu('kids');
                        navigate('/kids');
                    }}
                >
                    Kids
                    {menu === 'kids' ? <hr /> : <></>}
                </li>
            </ul>
            <div className={cx('nav-login-cart')}>
                <button onClick={() => navigate('/login')}>Login</button>
                <img src={cart_icon} onClick={() => navigate('/cart')} alt="" />

                <div className={cx('nav-cart-count')}>{getTotalCartItem()}</div>
            </div>
        </nav>
    );
}

export default Navbar;
