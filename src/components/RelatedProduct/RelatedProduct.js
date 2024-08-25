import classNames from 'classnames/bind';

import styles from './RelatedProduct.module.scss';
import data_product from '../../assets/data';
import Item from '../Item/Item';

const cx = classNames.bind(styles);

function RelatedProduct() {
    return (
        <div className={cx('related-products')}>
            <h1>Related Products</h1>
            <hr />
            <div className={cx('related-products-item')}>
                {data_product.map((item, index) => {
                    return (
                        <Item
                            key={index}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            new_price={item.new_price}
                            old_price={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default RelatedProduct;
