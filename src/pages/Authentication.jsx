import React, { useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Form } from "react-router-dom";
import { addApplicant } from "../utils/applicant_Utils";
import { toast } from "sonner";

export const Authentication = () => {
  const { user, signInUser, signUpUser } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = location.pathname == "/signin"; //ha egyenlő, true értéket fog kapni

  const handleSubmit = async (event) => {
    event.preventDefault;
    const data = new FormData(event.currentTarget);
    if (data.get("password").length < 6) {
      toast.warning(
        `A password length of ${data.get("password").length} is not accepted!`
      );
      return;
    } else {
      if (isSignedIn) {
        signInUser(data.get("e-mail"), data.get("password"));
        setTimeout(() => navigate("/"), 2000);
      } else {
        signUpUser(
          data.get("e-mail"),
          data.get("password"),
          data.get("displayName")
        );
        addApplicant(data.get("displayName"), data.get("e-mail"), "NaN");
        setTimeout(() => navigate("/"), 2000);
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-950 text-center pt-20 flex-col gap-10">
      <h1 className="text-3xl wlh12 font-bold">{isSignedIn ? "Connect" : "Apply"}</h1>
      <div className="flex flex-col md:flex-row gap-10 text-center items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center text-4xl font-extrabold text-white">
            {isSignedIn ? "Sign in to WorkLinker" : "Join WorkLinker"}
          </h2>

          <p className="mt-2 text-center text-sm text-gray-300">
            {isSignedIn
              ? "Sign in to access your career opportunities"
              : "Create your account and take the next step in your career"}
          </p>
        </div>
        <div className="w-full max-w-sm flex-auto ">
          <Form
            className="bg-gray-800 border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 rounded-2xl px-8 pt-8 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <div className="mb-6">
              <label
                className="block text-white text-sm font-bold mb-3 text-left"
                htmlFor="e-mail"
              >
                E-mail address
              </label>
              <input
                className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-[#5a28cc]"
                name="e-mail"
                type="email"
                placeholder="johndoe@example.com"
                id="e-mail"
              />
            </div>

            {!isSignedIn && (
              <div className="mb-6">
                <label
                  className="block text-white text-sm font-bold mb-3 text-left"
                  htmlFor="displayName"
                >
                  Your name
                </label>
                <input
                  className="input input-bordered w-full max-w-xs focus:ring-2 focus:ring-[#5a28cc]"
                  name="displayName"
                  type="text"
                  placeholder="John Doe"
                  id="displayName"
                />
              </div>
            )}

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
                placeholder="°°°°°°"
                id="password"
                onChange={(e) => console.log(e.target.value)}
                required
                autoComplete={isSignedIn ? "current-password" : "new-password"}
              />
            </div>

            {isSignedIn && (
              <div className="mt-4 mb-6">
                <a
                  className="inline-block text-base font-normal text-[#5a28cc] hover:underline hover:underline-offset-4 transition-all"
                  onClick={() => navigate("/resetpassword")}
                >
                  Forgot password?
                </a>
              </div>
            )}

            <div className="mb-4">
              <button
                className="w-full cursor-pointer rounded-lg border-2 border-solid border-[#5a28cc] bg-[#5a28cc] px-8 py-3 text-base font-medium text-white hover:bg-neutral-100 hover:text-[#5a28cc] transition-all duration-300"
                type="submit"
              >
                {isSignedIn ? "Sign in" : "Get started"}
              </button>
            </div>
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-800/50 text-gray-400">
                    {isSignedIn
                      ? "New to WorkLinker?"
                      : "Already have an account?"}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  onClick={() => navigate(isSignedIn ? "/apply" : "/signin")}
                  className="w-full flex justify-center py-2 px-4 border border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-gray-700 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                >
                  {isSignedIn ? "Create your account" : "Sign in instead"}
                </button>
              </div>
            </div>
          </Form>

          <p
            className="text-center text-gray-400 text-xs mt-4 cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => navigate("/hrcontact")}
          >
            &copy;2025 WorkLinker inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
