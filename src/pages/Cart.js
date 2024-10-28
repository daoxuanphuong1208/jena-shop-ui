import classNames from 'classnames/bind';

import styles from './css/Cart.module.scss';
import CartItem from '../components/CartItem/CartItem';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import cart_empty from '../assets/cart_empty.png';
import { Link, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
function Cart() {
    const { getTotalCartItem, setMenu, menu } = useContext(ShopContext);
    const navigate = useNavigate();
    return (
        <div>
            {getTotalCartItem() === 0 ? (
                <div className={cx('cart-empty')}>
                    <img className={cx('cart-empty-img')} src={cart_empty} alt="" />

                    <button
                        className={cx('cart-empty-btn')}
                        onClick={() => {
                            setMenu(`${menu}`);
                            navigate(menu === 'home' ? '/' : `/${menu}`);
                        }}
                    >
                        Buy now
                    </button>
                </div>
            ) : (
                <CartItem />
            )}
        </div>
    );
}

export default Cart;
