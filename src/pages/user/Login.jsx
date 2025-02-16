import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLoginUserMutation } from '../../redux/features/auth/authApi';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [loginUser, { isLoading: loginLoding }] = useLoginUserMutation();


    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //handle login
    const handleLogin = async (e) => {
        e.preventDefault();
        const data = { email, password };
        try {
            const response = await loginUser(data).unwrap();
            const { token, user } = response;
            dispatch(setUser({ user })); // Adjusted dispatch call
            toast.success("Login successful");
            navigate("/");
        } catch (error) {
            setMessage('Please provide a valid email and password');
        }
    };

    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
            <h2 className='text-2xl font-semibold pt-5'>Please Login</h2>
            <form onSubmit={handleLogin} className='space-y-5 max-w-sm mx-auto pt-8'>
                <input type="email" value={email}
                    placeholder='Email Address'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                <input type="password" value={password}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button disabled={loginLoding} className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Login</button>
            </form>
            <p className='my-5 text-center'>Don't have an account? <Link className='text-red-700 italic' to="/register">Register </Link>here.</p>
        </div>
    )
}

export default Login