import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { Form } from "react-router-dom";
import { Toast } from "../components/Toast";
import { checkAdmin } from "../utils/crudUtil";

export const Authentication = ({setAdmin, role}) => {
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
      (await checkAdmin(data.get("e-mail"))) ? setAdmin(true) : setAdmin(false);
      console.log(data.get("e-mail"));
      
    } else {
      signUpUser(
        data.get("e-mail"),
        data.get("password"),
        data.get("displayName")
      );
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-950">
      <div className="w-full max-w-xs flex-auto">
        <Form
          className="bg-gray-800 shadow-md shadow-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <h1>{role}</h1>
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
          )}

                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="input input-bordered w-full max-w-xs" name="password" type="password" placeholder="******************" />
                    </div>

          <div className="flex items-center justify-between">
            <button className="bg-purple-700 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              {isSignedIn ? "Sign in" : "Sign up"}
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-purple-500 hover:text-purple-300"
              href="#"
              onClick={() => navigate("/resetpassword")}
            >
              Forgot Password?
            </a>
          </div>
        </Form>
        <p className="text-center text-gray-400 text-xs">
          &copy;2025 WorkLinker inc. All rights reserved.
        </p>
        {msg && <Toast {...msg} />}
      </div>
    </div>
  );
};
