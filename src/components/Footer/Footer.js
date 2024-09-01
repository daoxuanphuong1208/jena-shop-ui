import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import footer_logo from '../../assets/logo_big.png';
import instagram_icon from '../../assets/instagram_icon.png';
import pintester_icon from '../../assets/pintester_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-logo')}>
                <img src={footer_logo} alt="" />
                <p>JENA SHOP</p>
            </div>
            <ul className={cx('footer-links')}>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className={cx('footer-social-icon')}>
                <div className={cx('footer-social-container ')}>
                    <img src={instagram_icon} alt="" />
                </div>
                <div className={cx('footer-social-container ')}>
                    <img src={pintester_icon} alt="" />
                </div>
                <div className={cx('footer-social-container ')}>
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>
            <div className={cx('footer-copyright')}>
                <hr />
                <p>Copyright @ 2023 - All Right Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
