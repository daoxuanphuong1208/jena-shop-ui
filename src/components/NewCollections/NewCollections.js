import classNames from 'classnames/bind';

import new_collection from '../../assets/new_collections';
import styles from './NewCollections.module.scss';
import Item from '../Item/Item';

const cx = classNames.bind(styles);

function NewCollections() {
    return (
        <div id="new_collections" className={cx('new-collections')}>
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className={cx('collections')}>
                {new_collection.map((item, index) => {
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

export default NewCollections;