import React from 'react'
import { Form } from 'react-router-dom'

export const Apply = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
    <div className="w-full max-w-xs flex-auto">
      <Form
        className="bg-gray-800 shadow-md shadow-white rounded px-8 pt-6 pb-8 mb-4"
      >
        <h1 className='text-2xl text-white font-bold text-center'>Apply</h1>
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


        <div className="flex items-center justify-between">
          <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Apply
          </button>
        </div>
      </Form>
      <p className="text-center text-gray-400 text-xs">
        &copy;2025 WorkLinker inc. All rights reserved.
      </p>
    </div>
  </div>
  )
}
