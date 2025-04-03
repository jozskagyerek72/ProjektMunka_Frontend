import React, { useContext} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Form } from "react-router-dom";
import { addApplicant } from "../utils/applicant_Utils";
import { toast } from "sonner";

export const Authentication = ({ role }) => {
  const { user, signInUser, signUpUser } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = location.pathname == "/signin"; //ha egyenlő, true értéket fog kapni

  const handleSubmit = async (event) => {
    event.preventDefault
    const data = new FormData(event.currentTarget)
    if (data.get("password").length < 6) {
      toast.error(`A password length of ${data.get('password').length} is not accepted!`)
      console.log(data.get('password').length);
      return
    }
    else {
      if (isSignedIn) {
        signInUser(data.get("e-mail"), data.get("password"));
        setTimeout(() => navigate("/"), 1500);
      } else {
        signUpUser(
          data.get("e-mail"),
          data.get("password"),
          data.get("displayName")
        );
        addApplicant(data.get("displayName"), data.get("e-mail"), "NaN");
        setTimeout(() => navigate("/"), 1500);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-950 text-center pt-20">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-gray-800 shadow-md shadow-white rounded-2xl px-8 pt-8 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          {/* Title - changes with role */}
          <h1 className="font-bold mb-6 text-white text-xl">{role}</h1>

          {/* Email field */}
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-3 text-left"
              htmlFor="e-mail"
            >
              E-mail
            </label>
            <input
              className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-[#5a28cc]"
              name="e-mail"
              type="email"
              placeholder="E-mail"
              id="email"
            />
          </div>

          {/* Conditional name field */}
          {!isSignedIn && (
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-3 text-left"
                htmlFor="displayName"
              >
                Name
              </label>
              <input
                className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-[#5a28cc]"
                name="displayName"
                type="text"
                placeholder="Your name"
              />
            </div>
          )}

          {/* Password field */}
          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-3 text-left"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-[#5a28cc]"
              name="password"
              type="password"
              placeholder="******"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>

          {/* Forgot password */}
          <div className="mt-4 mb-6">
            <a
              className="inline-block text-base font-normal text-[#5a28cc] hover:underline hover:underline-offset-4 transition-all"
              onClick={() => navigate("/resetpassword")}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit button */}
          <div className="mb-4">
            <button
              className="w-full cursor-pointer rounded-lg border-2 border-solid border-[#5a28cc] bg-[#5a28cc] px-8 py-3 text-base font-medium text-white hover:bg-neutral-100 hover:text-[#5a28cc] transition-all duration-300"
              type="submit"
            >
              Sign in
            </button>
          </div>
        </Form>

        {/* Footer */}
        <p
          className="text-center text-gray-400 text-xs mt-4 cursor-pointer hover:text-gray-300 transition-colors"
          onClick={() => navigate("/hrcontact")}
        >
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
      </div>
    </div>
  );
};
