import React from 'react'
import { useContext } from 'react'
import { Form } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import { addApplicant } from '../utils/applicant_Utils'
import { Toast } from '../components/Toast'

export const Apply = () => {
  const { user, signUpUser, msg, setMsg} = useContext(UserContext)

  const handleSubmit = async (event) => {
    event.preventDefault
    const data = new FormData(event.currentTarget)
    signUpUser(
      data.get('e-mail'),
      data.get('displayName'),
      data.get('password')
    )

    addApplicant(data.get("displayName"), data.get("e-mail"), "https://res.cloudinary.com/gb-cloud-blog/image/upload/v1742547435/frhjdifyordyem3pwrsu.jpg");
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-gray-800 shadow-md shadow-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl text-white font-bold text-center">Apply</h1>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-bold mb-2"
              htmlFor="e-mail"
            >
              E-mail
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              name="e-mail"
              type="email"
              placeholder="E-mail"
              id="email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="displayName"
            >
              Name
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              name="displayName"
              type="text"
              placeholder="your name"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              name="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div className="flex items-center justify-between">
            <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Apply
            </button>
          </div>
        </Form>
        <p className="text-center text-gray-400 text-xs">
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
        {msg && <Toast {...msg} />}
      </div>
    </div>
  );
}
