import classNames from 'classnames/bind';

import styles from './CartItem.module.scss';
import { ShopContext } from '../../context/ShopContext';
import { useContext } from 'react';
import remove_icon from '../../assets/cart_cross_icon.png';

const cx = classNames.bind(styles);

function CartItem() {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className={cx('cart-item')}>
            <div className={cx('cart-item-wrap')}>
                {all_product.map((item, index) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div className={cx('cart-item-main')}>
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <img className={cx('cart-product-img')} src={item.image} alt="" />
                                    <div>
                                        <p className={cx('cart-product-name')}>{item.name}</p>
                                        <p style={{ fontWeight: 'bold' }}>{item.new_price}₫</p>
                                    </div>
                                </div>
                                <button className={cx('cart-item-quantity')}>{cartItems[item.id]}</button>
                                <img
                                    className={cx('cart-item-remove-icon')}
                                    onClick={() => removeFromCart(item.id)}
                                    src={remove_icon}
                                    alt=""
                                />
                            </div>
                        );
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className={cx('cart-item-down')}>
                <div className={cx('cart-item-totals')}>
                    <h1>Cart Total</h1>
                    <div>
                        <div className={cx('cart-item-total-item')}>
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className={cx('cart-item-total-item')}>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className={cx('cart-item-total-item')}>
                            <h3>Total</h3>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <button>PROCEED TO CHECK OUT</button>
                    </div>
                </div>
                <div className={cx('cart-item-promo-code')}>
                    <p>If you have a promo code, Enter it here</p>
                    <div className={cx('cart-item-promo-code-box')}>
                        <input type="text" placeholder="promo code" />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
