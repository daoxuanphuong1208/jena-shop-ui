import classNames from 'classnames/bind';

import styles from './css/LoginSignup.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
function LoginSignup() {
    const [currState, setCurrState] = useState('Login');
    return (
        <div className={cx('login-signup')}>
            <form>
                <div className={cx('login-signup-container')}>
                    {currState === 'Login' ? <h1>Login</h1> : <h1>Sign Up</h1>}
                    <div className={cx('login-signup-fields')}>
                        <input type="text" placeholder="Username" required />
                        {currState === 'Login' ? null : <input type="email" placeholder="Email Address" />}
                        <input type="password" placeholder="Password" required />
                    </div>

                    {currState === 'Login' ? (
                        <>
                            <p className={cx('login-signup-forgot-pass')}>Forgot password?</p>
                            <button>Login</button>
                            <div className={cx('login-signup-create-acc')}>
                                <p>
                                    Create a new account? <span onClick={() => setCurrState('Signup')}>Click here</span>
                                </p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={cx('login-signup-agree')}>
                                <input type="checkbox" name="" id="" />
                                <p>By continuing, i agree to the terms of use & privacy policy.</p>
                            </div>
                            <button>Sign up</button>
                            <p className={cx('login-signup-login')}>
                                Already have an account? <span onClick={() => setCurrState('Login')}>Login here</span>
                            </p>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

export default LoginSignup;
