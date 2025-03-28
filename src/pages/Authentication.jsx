import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Form } from "react-router-dom";
import { Toast } from "../components/Toast";
import { addApplicant } from "../utils/applicant_Utils";

export const Authentication = ({ role }) => {
  const { user, signInUser, msg, setMsg, signUpUser } = useContext(UserContext);

  const navigate = useNavigate();
  const location = useLocation();
  const isSignedIn = location.pathname == "/authentication/signin"; //ha egyenlő, true értéket fog kapni

  useEffect(() => {
    setMsg(null);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault;
    const data = new FormData(event.currentTarget);
    if (isSignedIn) {
      signInUser(data.get("e-mail"), data.get("password"));

      console.log(data.get("e-mail"));
    } else {
      signUpUser(
        data.get("e-mail"),
        data.get("password"),
        data.get("displayName")
      );

      addApplicant(data.get("displayName"), data.get("e-mail"), "NaN")
    }
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-950 text-center">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-gray-800 shadow-md shadow-white rounded-2xl px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1 className="font-bold mb-2 text-white">{role}</h1>
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

          {!isSignedIn && (
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
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
          )}

          <div className="mb-6">
            <label
              className="block text-white text-sm font-bold mb-2"
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

          <div className="group mt-5">
            <a
              className="text-base font-normal text-[#5a28cc] no-underline group-hover:underline"
              onClick={()=>navigate('/resetpassword')}
            >
              Forgot password?
            </a>
          </div>
          <button
            className="mt-2 cursor-pointer rounded border-2 border-solid border-[#5a28cc] bg-[#5a28cc] px-8 py-2 text-base font-medium text-white hover:bg-neutral-100 hover:text-[#5a28cc] hover:transition-all hover:duration-500 hover:ease-in-out"
            type="submit"
          >
            Sign in
          </button>
        </Form>
        <p className="text-center text-gray-400 text-xs" onClick={()=>navigate('/hrcontact')}>
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
        {msg && <Toast {...msg} />}
      </div>
    </div>
  );
};
