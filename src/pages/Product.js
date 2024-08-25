import classNames from 'classnames/bind';

import styles from './css/Product.module.scss';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import DescriptionsBox from '../components/DescriptionsBox/DescriptionsBox';
import RelatedProduct from '../components/RelatedProduct/RelatedProduct';

const cx = classNames.bind(styles);
function Product() {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();
    const product = all_product.find((item) => item.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product} />
            <ProductDetail product={product} />
            <DescriptionsBox />
            <RelatedProduct />
        </div>
    );
}

export default Product;
