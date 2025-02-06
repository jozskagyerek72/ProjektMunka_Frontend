import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { Toastify } from '../components/Toastify'

export const Authentication = () => {
    const { user, signInUser, msg, setMsg, signUpUser } = useContext(UserContext)

    const location = useLocation()
    const isSignedIn = location.pathname == '/authentication/signin'
    const navigate = useNavigate()

    useEffect(() => {
        setMsg(null)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault
        const data = new FormData(event.currentTarget)
        console.log(data.get('e-mail'), data.get('username'), data.get('password'));
        if (isSignedIn) {
            signInUser(data.get('e-mail'), data.get('password'))
        } else {
            signUpUser(data.get('e-mail'), data.get('password'), data.get('username'))
        }
    }

    return (
        <div className='home bg-white flex justify-center align-center'>
            <div className="w-full max-w-xs p-8 bg-gray-950 h-min">
                <h3 className='text-center'>{isSignedIn ? 'Sign in' : 'Sign up'}</h3>
                <form className='bg-gray shadow-md rounded' onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <label htmlFor="email">
                            E-mail
                        </label>
                        <input type="text" placeholder='E-mail' name='e-mail' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="username">
                            Username
                        </label>
                        <input type="text" placeholder='Username' name='username' />
                    </div>
                    <div className='mb-4'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="text" placeholder="******************" name='password' />
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            {isSignedIn ? 'Sign in' : 'Sign up'}
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={() => navigate('/resetpassword')}>
                            Forgot Password?
                        </a>
                    </div>
                </form>

                {msg && <Toastify {...msg} />}
            </div>

        </div>
    )
}

