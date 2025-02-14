import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Toast } from "../components/Toast";
import { Form } from "react-router-dom";

export const PasswordReset = () => {
  const { msg, resetPassword } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    resetPassword(data.get("e-mail"));
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="e-mail"
            >
              E-mail
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              name="e-mail"
              type="text"
              placeholder="E-mail"
            />
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Send password reset e-mail
            </button>
          </div>
        </Form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
        {msg && <Toast {...msg} />}
      </div>
    </div>
  );
};
