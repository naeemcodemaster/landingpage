'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { loginUser } from '../api/auth';
import { useRouter } from 'next/navigation';

const Page = () => { 
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    console.log('Email:', email);
    console.log('Password:', password);

    try {
      const data = await loginUser(email,password);
      console.log(data);
      localStorage.setItem('token',data.accessToken);
      router.push('/')
    } catch (error) {
      console.log(error);
    }


  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white w-full max-w-md p-6 rounded-lg shadow-md'>
        <h2 className='text-1xl font-bold text-center text-gray-700 mb-6'>Login Page</h2>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='email' className='block text-gray-600 font-semibold'>Email</label>
            <input 
              type='email' 
              id='email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder='Enter Email' 
              className='w-full border px-4 py-2 mt-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200' 
            />
          </div>
          <div>
            <label htmlFor='password' className='block text-gray-600 font-semibold'>Password</label>
            <input 
              type='password' 
              id='password'
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder='Enter Password' 
              className='w-full border px-4 py-2 mt-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200' 
            />
          </div>
          <button 
            type='submit' 
            className='bg-primary p-2 text-white rounded-md w-full hover:bg-secondary'
          >
            Login
          </button>
          <p>Don't have an account? <Link href={'/register'}>Sign Up</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Page
