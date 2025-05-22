/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Context/AppContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginRegister = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const [state, setState] = useState('Login'); // default to Login
  const [regNo, setRegNo] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === 'Register') {
        const { data } = await axios.post(`https://personal-backed.onrender.com/register`, {
          RegNo: regNo,
          Name: name,
          Email: email,
          password
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Registered successfully!');
          navigate('/');
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`https://personal-backed.onrender.com/login`, {
          RegNo: regNo,
          Email: email,
          password
        });

        if (data.success) {
          localStorage.setItem('token', data.token);
          setToken(data.token);
          toast.success('Logged in successfully!');
          navigate('/');
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      navigate('/');
    }
  }, [navigate, setToken]);

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className='min-h-[80vh] flex items-center justify-center px-4'
      >
        <div className='glassmorphism p-8 rounded-2xl shadow-lg w-full max-w-md'>
          <h2 className='text-2xl font-bold text-white mb-4'>
            {state === 'Register' ? 'Create Account' : 'Login'}
          </h2>
          <p className='text-white mb-6'>
            Please {state === 'Register' ? 'register' : 'login'} to continue
          </p>

          <div className='space-y-4'>
            <div>
              <label className='block text-white mb-1'>Reg No</label>
              <input
                type='text'
                value={regNo}
                onChange={(e) => setRegNo(e.target.value)}
                required
                className='w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring focus:ring-primary'
                placeholder='Enter your Reg No'
              />
            </div>

            {state === 'Register' && (
              <>
                <div>
                  <label className='block text-white mb-1'>Name</label>
                  <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring focus:ring-primary'
                    placeholder='Enter your name'
                  />
                </div>

                <div>
                  <label className='block text-white mb-1'>Email</label>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className='w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring focus:ring-primary'
                    placeholder='Enter your email'
                  />
                </div>
              </>
            )}

            {state === 'Login' && (
              <div>
                <label className='block text-white mb-1'>Email</label>
                <input
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring focus:ring-primary'
                  placeholder='Enter your email'
                />
              </div>
            )}

            <div>
              <label className='block text-white mb-1'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full px-4 py-2 rounded-md bg-white/20 backdrop-blur-md text-white placeholder-gray-200 border border-white/30 focus:outline-none focus:ring focus:ring-primary'
                placeholder='Enter password'
              />
            </div>

            <button
              type='submit'
              className='cursor-pointer w-full py-2 mt-4 bg-primary text-white rounded-md font-semibold hover:bg-opacity-90 transition'
            >
              {state === 'Register' ? 'Register' : 'Login'}
            </button>

            <p className='text-white mt-4 text-center'>
              {state === 'Register'
                ? 'Already have an account?'
                : "Don't have an account?"}{' '}
              <span
                onClick={() =>
                  setState(state === 'Register' ? 'Login' : 'Register')
                }
                className='underline text-primary cursor-pointer'
              >
                {state === 'Register' ? 'Login here' : 'Register now'}
              </span>
            </p>
          </div>
        </div>
      </form>

      <ToastContainer />
    </>
  );
};

export default LoginRegister;
