import classNames from 'classnames/bind';

import styles from './NewsLetter.module.scss';

const cx = classNames.bind(styles);

function NewsLetter() {
    return (
        <div className={cx('newsletter')}>
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className={cx('input-wrap')}>
                <input type="email" placeholder="Your Email Id" />
                <button>Subscribe</button>
            </div>
        </div>
    );
}

export default NewsLetter;
