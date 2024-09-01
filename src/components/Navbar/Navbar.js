import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
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

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle(styles['nav-menu-visible']);
        e.target.classList.toggle(styles['open']);
    };

    return (
        <nav className={cx('navbar')}>
            <div className={cx('nav-logo')}>
                <Link to="/">
                    <img onClick={() => setMenu('home')} src={logo} alt="" />
                </Link>
                <Link to="/">
                    <p onClick={() => setMenu('home')}>JENA SHOP</p>
                </Link>
            </div>
            <img src={nav_dropdown} alt="" className={cx('nav-dropdown')} onClick={dropdown_toggle} />
            <ul ref={menuRef} className={cx('nav-menu')}>
                <Link to="/">
                    <li onClick={() => setMenu('home')}>
                        Home
                        {menu === 'home' ? <hr /> : <></>}
                    </li>
                </Link>
                <Link to="/mens">
                    <li onClick={() => setMenu('mens')}>
                        Men
                        {menu === 'mens' ? <hr /> : <></>}
                    </li>
                </Link>
                <Link to="/womens">
                    <li onClick={() => setMenu('womens')}>
                        Women
                        {menu === 'womens' ? <hr /> : <></>}
                    </li>
                </Link>
                <Link to="/kids">
                    <li onClick={() => setMenu('kids')}>
                        Kids
                        {menu === 'kids' ? <hr /> : <></>}
                    </li>
                </Link>
            </ul>
            <div className={cx('nav-login-cart')}>
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cart_icon} alt="" />
                </Link>
                <div className={cx('nav-cart-count')}>{getTotalCartItem()}</div>
            </div>
        </nav>
    );
}

export default Navbar;
