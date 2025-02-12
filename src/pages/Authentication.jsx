import React, { useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { toast, Toaster } from 'sonner'
import { Form } from 'react-router-dom'
import { Toast } from '../components/Toast'

export const Authentication = () => {
    const { user, signInUser, msg, setMsg, signUpUser } = useContext(UserContext)

    const navigate = useNavigate()
    const location = useLocation()
    const isSignedIn = location.pathname == '/authentication/signin' //ha egyenlő, true értéket fog kapni

    useEffect(() => {
        setMsg(null)
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault
        const data = new FormData(event.currentTarget)
        console.log(data.get('e-mail'), data.get('displayName'), data.get('password'));
        if (isSignedIn) {
            signInUser(data.get('e-mail'), data.get('password'))
        } else {
            signUpUser(data.get('e-mail'), data.get('password'), data.get('displayName'))
        }
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-xs flex-auto">
                <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="e-mail">
                            E-mail
                        </label>
                        <input className="input input-bordered w-full max-w-xs" name="e-mail" type="text" placeholder="E-mail" />
                    </div>

                    {!isSignedIn &&
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="displayName">
                                Name
                            </label>
                            <input className="input input-bordered w-full max-w-xs" name="displayName" type="text" placeholder="displayName" />
                        </div>
                    }


                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="input input-bordered w-full max-w-xs" name="password" type="password" placeholder="******************" />

                    <div className='mb-4'>
                        <label htmlFor="password">
                            Password
                        </label>
                        <input type="password" typeof='password' placeholder="******************" name='password' />
                    </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {isSignedIn ? 'Sign in' : 'Sign up'}
                        </button>
                        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#" onClick={() => navigate('/resetpassword')}>
                            Forgot Password?
                        </a>
                    </div>

                </Form>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2025 WorkLinker inc. All rights reserved.
                </p>
                {msg && <Toast {...msg} />}
            </div>
        </div>


    )
}

