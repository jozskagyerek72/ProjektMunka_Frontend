

import React from 'react'

import { useLocation } from 'react-router-dom'

export const Authentication = () => {

    const location = useLocation()
    const isSignedIn = location.pathname == '/authentication/signin'

    return (
        <div className='home bg-white flex justify-center align-center'>
            <div className="w-full max-w-xs p-8 bg-gray-950 h-min">
                <h3 className='text-center'>{isSignedIn ? 'Sign in' : 'Sign up'}</h3>
                <form className='bg-gray shadow-md rounded'>
                    <div className='mb-4'>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="text" placeholder='E-mail' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" placeholder='Username' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="text" placeholder="******************" />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {isSignedIn ? 'Sign in' : 'Sign up'}
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
            </div>

        </div>
    )
}

