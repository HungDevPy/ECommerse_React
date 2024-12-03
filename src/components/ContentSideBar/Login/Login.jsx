import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useState } from 'react';
import { ToastContext } from '@/contexts/ToastProvider';
import { register, signIn } from '@/apis/authService';
import Cookies from 'js-cookie';
import { SideBarContext } from '@/contexts/SideBarprovider';
import { StoreContext } from '@/contexts/storeProvider';

function Login() {
    const { container, title, boxRememberMe, lostPw } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);
    const [isLoading, setisLoading] = useState(false);
    const {setIsOpen,handleGetListProductCart} = useContext(SideBarContext);
    const {setUserId} = useContext(StoreContext);
    
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false, // Track remember me state
            cfmpassword: '', // Only for registration
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
            // Confirm password validation for registration
            cfmpassword: Yup.string().when('isRegister', {
                is: true,
                then: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm Password is required'),
            }),
        }),
        onSubmit: async (values) => {
            const {email:username, password} = values;
            if(isLoading) return;
            setisLoading(true);

            if(isRegister){
                await register({username, password}).then((res) =>{
                    console.log(res);
                    toast.success(res.message);
                    setisLoading(false);
                }).catch((err) => {
                    console.error('Registration error:', err);
                    toast.error(err.response.data.message);
                    setisLoading(false);
                });
            }

            if(!isRegister){
                await signIn({username,password}).then((res) => {
                    setisLoading(false);
                    setUserId(res.data.id);
                    const {id, token, refreshToken} = res.data;
                    Cookies.set('token', token);
                    Cookies.set('refreshToken', refreshToken);
                    Cookies.set('userId', id);
                    toast.success('Login successfully');
                    setIsOpen(false);
                    handleGetListProductCart(id,'cart');
                }).catch((err) => {
                    setisLoading(false);
                    toast.error(err.response.data.message);
                });
            }
        }
    });

    const handleToggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    };

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>

            <form onSubmit={formik.handleSubmit}>
                <InputCommon
                    id="email"
                    label="Email"
                    type="text"
                    isRequired
                    formik={formik}
                />

                <InputCommon
                    id="password"
                    label="Password"
                    type="password"
                    isRequired
                    formik={formik}
                />

                {isRegister && (
                    <InputCommon
                        id="cfmpassword"
                        label="Confirm Password"
                        type="password"
                        isRequired
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            onChange={formik.handleChange}
                            checked={formik.values.rememberMe}
                        />
                        <span>Remember me</span>
                    </div>
                )}

                <Button
                    content={isLoading ? 'IS LOADING...' :isRegister ? 'REGISTER' : 'LOGIN'}
                    type="submit"
                    style={{ width: '100%' }}
                />
            </form>

            <Button
                content={isRegister ? 'Already have an account?' : "Don't have an account?"}
                isPriamry={false}
                style={{ margin: '10px 0', width: '100%' }}
                onClick={handleToggle}
            />

            {!isRegister && <div className={lostPw}>Lost your password?</div>}
        </div>
    );
}

export default Login;
