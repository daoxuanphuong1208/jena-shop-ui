import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Breadcrum.module.scss';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const cx = classNames.bind(styles);

function Breadcrum(props) {
    const { setMenu } = useContext(ShopContext);
    const { product } = props;

    return (
        <div className={cx('breadcrum')}>
            <Link onClick={() => setMenu('home')} to="/">
                HOME
            </Link>
            <img src={arrow_icon} alt="" />{' '}
            <Link onClick={() => setMenu(`${product.category}s`)} to={`/${product.category}s`}>
                {product.category}
            </Link>
            <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;
