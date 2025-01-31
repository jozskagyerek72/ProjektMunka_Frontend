//import React from 'react'

//import { useLocation } from 'react-router-dom'

export const Authentication = () => {

    //const location = useLocation()
    //const isSignedIn = location.pathname == '/authentication/signin'

    return (
        <div className='home bg-gray-950 flex justify-center align-center'>
            <div className="relative flex flex-col justify-center h-screen overflow-hidden">
                <div className="w-full p-6 m-auto bg-gray-700 border-2 rounded-md shadow-md lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-white">Sign Up</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Email Address" className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password"
                                className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="Confirm Password"
                                className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <button className="btn btn-block btn-primary">Sign Up</button>
                        </div>
                        <span className='text-center '>Already have an account ?</span>
                        <button className='btn btn-block  btn-primary'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}