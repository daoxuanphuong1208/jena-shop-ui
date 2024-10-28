import classNames from 'classnames/bind';
import { Link, useNavigate } from 'react-router-dom';

import styles from './Breadcrum.module.scss';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';

const cx = classNames.bind(styles);

function Breadcrum(props) {
    const { setMenu } = useContext(ShopContext);
    const { product } = props;
    const navigate = useNavigate();

    return (
        <div className={cx('breadcrum')}>
            <div
                onClick={() => {
                    setMenu('home');
                    navigate('/');
                }}
            >
                HOME
            </div>
            <img src={arrow_icon} alt="" />{' '}
            <div
                onClick={() => {
                    setMenu(`${product.category}s`);
                    navigate(`/${product.category}ss`);
                }}
            >
                {product.category}
            </div>
            <img src={arrow_icon} alt="" /> {product.name}
        </div>
    );
}

export default Breadcrum;
