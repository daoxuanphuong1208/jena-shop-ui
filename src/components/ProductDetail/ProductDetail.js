import classNames from 'classnames/bind';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './ProductDetail.module.scss';
import star_icon from '../../assets/star_icon.png';
import star_dull_icon from '../../assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const cx = classNames.bind(styles);

function ProductDetail(props) {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className={cx('product-detail')}>
            <ToastContainer />
            <div className={cx('product-detail-left')}>
                <div className={cx('product-detail-img-list')}>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className={cx('product-detail-img-wrap')}>
                    <img className={cx('product-detail-img-main')} src={product.image} alt="" />
                </div>
            </div>
            <div className={cx('product-detail-right')}>
                <h1>{product.name}</h1>
                <div className={cx('product-detail-right-star')}>
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(68)</p>
                </div>
                <div className={cx('product-detail-right-prices')}>
                    <div className={cx('product-detail-right-price-old')}>${product.old_price}</div>
                    <div className={cx('product-detail-right-price-new')}>${product.new_price}</div>
                </div>
                <div className={cx('product-detail-right-description')}>
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short
                    sleeves, worn as an undershirt or outer garment.
                </div>
                <div className={cx('product-detail-right-select-size')}>
                    <h3>Select Size</h3>
                    <div className={cx('product-detail-right-sizes')}>
                        <div className={cx('product-detail-right-size')}>S</div>
                        <div className={cx('product-detail-right-size')}>M</div>
                        <div className={cx('product-detail-right-size')}>L</div>
                        <div className={cx('product-detail-right-size')}>XL</div>
                        <div className={cx('product-detail-right-size')}>XXL</div>
                    </div>
                </div>
                <button
                    onClick={() => {
                        addToCart(product.id);
                        toast.success('Add Successfully!');
                    }}
                >
                    ADD TO CART
                </button>
                <p className={cx('product-detail-right-category')}>
                    <span>Category: </span>Women, T-Shirt, Crop Top
                </p>
                <p className={cx('product-detail-right-category')}>
                    <span>Tags: </span>Modern, T-Shirt, Latest
                </p>
            </div>
        </div>
    );
}

export default ProductDetail;
