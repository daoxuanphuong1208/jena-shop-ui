import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item(props) {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => {
                window.scrollTo(0, 0);
                navigate(`/product/${props.id}`);
            }}
        >
            <div className={cx('item')}>
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <div className={cx('item-prices')}>
                    <div className={cx('item-price-new')}>${props.new_price}</div>
                    <div className={cx('item-price-old')}>${props.old_price}</div>
                </div>
            </div>
        </div>
    );
}

export default Item;
