import classNames from 'classnames/bind';

import styles from './Offers.module.scss';
import arrow_icon from '../../assets/arrow.png';
import exclusive_image from '../../assets/exclusive_image.png';

const cx = classNames.bind(styles);

function Offers() {
    return (
        <div className={cx('offers')}>
            <div className={cx('offers-left')}>
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>
                    Check Now
                    <img src={arrow_icon} alt="" />
                </button>
            </div>
            <div className={cx('offers-right')}>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    );
}

export default Offers;
