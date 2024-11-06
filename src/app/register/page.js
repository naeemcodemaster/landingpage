import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='bg-white w-full max-w-md p-6 rounded-lg shadow-md'>
        <h2 className='text-1xl font-bold text-center text-gray-700 mb-6'>Register Page</h2>
        <form className='space-y-6'>
        <div>
            <label htmlFor='username' className='block text-gray-600 font-semibold'>Username</label>
            <input type='text' placeholder='Enter Username' className='w-full border px-4 py-2 mt-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200'/>
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-600 font-semibold'>Email</label>
            <input type='text' placeholder='Enter Email' className='w-full border px-4 py-2 mt-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200'/>
          </div>
          <div>
          <label htmlFor='password' className='block text-gray-600 font-semibold'>Password</label>
            <input type='password' placeholder='Enter Password' className='w-full border px-4 py-2 mt-2 rounded-md text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-200'/>
          </div>
          <button type='submit' className='bg-primary p-2 text-white rounded-md w-full hover:bg-secondary'>
            Register
          </button>
          <p>Already have an account <Link href={'/login'}>Sign In</Link></p>

        </form>
      </div>
    </div>
  )
}

export default page