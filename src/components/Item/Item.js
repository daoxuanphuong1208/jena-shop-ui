import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Item.module.scss';

const cx = classNames.bind(styles);

function Item(props) {
    return (
        <Link onClick={window.scrollTo(0, 0)} to={`/product/${props.id}`}>
            <div className={cx('item')}>
                <img src={props.image} alt="" />
                <p>{props.name}</p>
                <div className={cx('item-prices')}>
                    <div className={cx('item-price-new')}>${props.new_price}</div>
                    <div className={cx('item-price-old')}>${props.old_price}</div>
                </div>
            </div>
        </Link>
    );
}

export default Item;
