import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useRegisterUserMutation } from '../../redux/features/auth/authApi';

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [registerUser] = useRegisterUserMutation();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser({ username, email, password }).unwrap();
            console.log(response);
            setMessage(response.message);
        } catch (error) {
            console.error("Failed to register user", error);
        }
    }
    return (
        <div className='max-w-sm bg-white mx-auto p-8 mt-36'>
            <h2 className='text-2xl font-semibold pt-5'>Please Register</h2>
            <form onClick={handleRegister} className='space-y-5 max-w-sm mx-auto pt-8'>
                <input type="text" value={username}
                    placeholder='Username'
                    required
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                <input type="email" value={email}
                    placeholder='Email Address'
                    required
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                <input type="password" value={password}
                    placeholder='Password'
                    required
                    className='w-full bg-bgPrimary focus:outline-none px-5 py-3'
                />
                {
                    message && <p className='text-red-500'>{message}</p>
                }
                <button className='w-full mt-5 bg-primary hover:bg-indigo-500 text-white font-medium py-3 rounded-md'>Register</button>
            </form>
            <p className='my-5 text-center'>Already have an account? Please <Link className='text-red-700 italic' to="/login"> Login </Link>here.</p>
        </div>
    )
}

export default Register