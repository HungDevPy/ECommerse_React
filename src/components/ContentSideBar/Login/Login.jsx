import { useState } from 'react';
import style from './styles.module.scss';
import { FiEye } from 'react-icons/fi';
import { FiEyeOff } from 'react-icons/fi';
import MyButton from '@components/Button/Button';

function Login() {
    const {
        container,
        boxFrom,
        title,
        boxInput,
        titleInput,
        boxIcon,
        boxremeber,
        lostWord,
    } = style;
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <form action='' method='get' className={boxFrom}>
                <div>
                    <div className={titleInput}>Username or email *</div>
                    <div className={boxInput}>
                        <input type='text' />
                    </div>
                </div>
                <div>
                    <div className={titleInput}>Password *</div>
                    <div className={boxInput}>
                        <input type={showPassword ? 'text' : 'password'} />
                        <div className={boxIcon} onClick={handleShowPassword}>
                            {showPassword ? <FiEyeOff /> : <FiEye />}
                        </div>
                    </div>
                </div>
            </form>
            <div className={boxremeber}>
                <input type='checkbox' />
                <span>Remember me</span>
            </div>
            <MyButton content={'LOGIN'} style={{ width: '100%' }} />
            <div className={lostWord}>Lost your password?</div>
        </div>
    );
}

export default Login;
