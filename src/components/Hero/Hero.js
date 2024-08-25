import classNames from 'classnames/bind';

import styles from './Hero.module.scss';
import hand_icon from '../../assets/hand_icon.png';
import arrow_icon from '../../assets/arrow.png';
import hero_image from '../../assets/hero_image.png';

const cx = classNames.bind(styles);

function Hero() {
    return (
        <div className={cx('hero')}>
            <div className={cx('hero-left')}>
                <h2>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className={cx('hero-hand-icon')}>
                        <p>new</p>
                        <img src={hand_icon} alt="" />
                    </div>
                    <p>collections</p>
                    <p>for everyone</p>
                </div>
                <a href="#new_collections">
                    <div className={cx('hero-latest-btn')}>
                        <div>Latest Collection</div>
                        <img src={arrow_icon} alt="" />
                    </div>
                </a>
            </div>

            <div className={cx('hero-right')}>
                <img src={hero_image} alt="" />
            </div>
        </div>
    );
}

export default Hero;
