import classNames from 'classnames/bind';
import { useContext, useState } from 'react';

import styles from './css/ShopCategory.module.scss';
import { ShopContext } from '../context/ShopContext';
import Item from '../components/Item/Item';

const cx = classNames.bind(styles);

function ShopCategory(props) {
    const { all_product } = useContext(ShopContext);
    const [sortOrder, setSortOrder] = useState('random');

    const sortedProducts = [...all_product].sort((a, b) => {
        if (sortOrder === 'lowToHigh') {
            return a.new_price - b.new_price;
        } else if (sortOrder === 'highToLow') {
            return b.new_price - a.new_price;
        } else {
            return 0;
        }
    });

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className={cx('shop-category')}>
            <img className={cx('shop-category-banner')} src={props.banner} alt="" />
            <div className={cx('shop-category-index-sort')}>
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className={cx('shop-category-sort')}>
                    <label htmlFor="sort-price">Sort by price</label>
                    <select className={cx('sort-price')} id="sort-price" name="sort-price" onChange={handleSortChange}>
                        <option value="random">Random</option>
                        <option value="lowToHigh">Low to high</option>
                        <option value="highToLow">High to low</option>
                    </select>
                </div>
            </div>
            <div className={cx('shop-category-products')}>
                {sortedProducts.map((item, index) => {
                    if (props.category === item.category) {
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
                    } else {
                        return null;
                    }
                })}
            </div>
            <div className={cx('load-more')}>
                <button>Load more</button>
            </div>
        </div>
    );
}

export default ShopCategory;
