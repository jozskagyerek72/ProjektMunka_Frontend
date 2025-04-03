import { React } from "react";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useEffect } from "react";
import { extractUrlAndId } from "../utils/utilities";
import { useNavigate } from "react-router-dom";

export const Header = ({ setRole }) => {
  const { user, signOutUser, admin } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    !user && setAvatar(null);
  }, [user, user?.photoURL]);

  return (
    <div className="navbar fixed top-0 lower-t-index bg-gray-800 z-10 text-white shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* Mobile view */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-600 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="text-white bg-gray-800">
              <a onClick={() => navigate("/hrcontact")}>About us </a>
            </li>
            <li>
              <a className="bg-gray-800 hover:bg-gray-700 m-1">Pages</a>
              <ul className="p-2 bg-gray-600">
                {admin || user ? (
                  <>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={() => navigate("/contact")} >Contact us</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={() => navigate("/analytics")}>Analytics</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={() => navigate("/workers")}>Workers</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={() => navigate("/gate")}>Worker gates</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={() => navigate("/contact")}>Contact us</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md">
                      <a onClick={()=>{setRole("Apply to us"); navigate("/apply")}}>Apply at us</a>
                    </li>
                  </>
                )}
              </ul>
            </li>
            <li className="btn rounded-full">
              <a onClick={() => navigate("/shifts")}>Shifts</a>
            </li>
          </ul>
        </div>
        <a onClick={() => navigate("/")} className="btn btn-ghost text-xl">
          WorkLinker
        </a>
      </div>
      {/* Desktop view */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={() => navigate("/hrcontact")} className="btn btn-ghost">
              About us
            </a>
          </li>
          <li>
            <details>
              <summary className="btn btn-ghost">Pages</summary>
              <ul className="p-2 bg-gray-600">
                {admin || user ? (
                  <>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={() => navigate("/contact")}>Contact</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={() => navigate("/analytics")}>Analytics</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={() => navigate("/workers")}>Workers</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={() => navigate("/gate")}>Gates</a>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={() => navigate("/contact")}>Contact</a>
                    </li>
                    <li className="text-white bg-gray-800 hover:bg-gray-600 rounded-md mt-0.5 mb-0.5">
                      <a onClick={()=>{setRole("Apply to us"); navigate("/apply")}}>Apply</a>
                    </li>
                  </>
                )}
              </ul>
            </details>
          </li>
          <summary
            className="btn btn-ghost"
            onClick={() => navigate("/shifts")}
          >
            Shifts
          </summary>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              {avatar ? (
                <img alt="Tailwind CSS Navbar component" src={avatar} />
              ) : (
                <img
                  alt="Tailwind CSS Header component"
                  src="../public/blankpeople.jpg"
                />
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-gray-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {user && (
              <li>
                <a
                  className="justify-between hover:bg-gray-600"
                  onClick={() => navigate("/profile")}
                >
                  Profile settings
                </a>
              </li>
            )}
            {user ? (
              <>
                <li className="hover:bg-gray-600">
                  <a
                    onClick={() => {
                      signOutUser();
                      setTimeout(() => navigate("/"), 1500);
                    }}
                  >
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a
                  onClick={() => {
                    setRole("Sign in as a worker");
                    navigate("/signin");
                  }}
                >
                  Sign in
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
