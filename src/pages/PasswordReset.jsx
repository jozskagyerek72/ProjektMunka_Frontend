import React from "react";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { Form, useNavigate } from "react-router-dom";

export const PasswordReset = () => {
  const { resetPassword } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    resetPassword(data.get("e-mail"));
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 pb-10">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-gray-800 shadow-md px-8 pt-6 pb-8 mb-4 rounded-2xl"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block font-bold mb-6 text-white text-xl text-center"
              htmlFor="e-mail"
            >
              Enter your e-mail
            </label>
            <input
              className="input input-bordered w-full max-w-xs"
              name="e-mail"
              type="text"
              placeholder="E-mail"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="w-full cursor-pointer rounded-lg border-2 border-solid border-[#5a28cc] bg-[#5a28cc] px-8 py-3 text-base font-medium text-white hover:bg-neutral-100 hover:text-[#5a28cc] transition-all duration-300"
              type="submit"
            >
              Reset password
            </button>
          </div>
        </Form>
        <p
          className="text-center text-gray-500 text-xs"
          onClick={() => navigate("/hrcontact")}
        >
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
