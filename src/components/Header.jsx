import { React } from 'react'
import { useState } from 'react'
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from '@heroicons/react/24/outline'
import { PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { useEffect } from 'react'
import { extractUrlAndId } from '../utils/utilities'

let pages = [

  { name: 'Analytics', description: 'See your own analytics', href: '/analytics', icon: ChartPieIcon },
  { name: 'Gate', description: 'Check in/out', href: '/gate', icon: FingerPrintIcon },
  { name: 'Workers', description: 'Analyze workers (Only for HR!)', href: '/workers', icon: SquaresPlusIcon },
  { name: 'Home', description: 'Go back to home page', href: '/', icon: ArrowPathIcon },
  { name: 'Profile', description: 'Your profile data', href: '/profile', icon: CursorArrowRaysIcon },
]
const callsToAction = [
  { name: 'How to use QR code?', href: 'https://www.youtube.com/watch?v=GRJGKS9blm8', icon: PlayCircleIcon },
  { name: 'Contact', href: '/contact', icon: PhoneIcon },
]

export const Header = () => {
  const { user } = useContext(UserContext)
  const [avatar, setAvatar] = useState(null)

  if (!user) {
    pages = pages.filter((product) => product.name == "Home")
  }

  useEffect(() => {
    user?.imageURL && setAvatar(extractUrlAndId(user.imageURL).url)
    !user && setAvatar(null)
  }, [user, user?.imageURL])

  console.log(avatar);
  {user && console.log("jelenleg be vagy jelentkezve");
  }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Item 1</a></li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src={user ? { avatar } : "public\blankpeople.jpg"} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile settings
              </a>
            </li>
            {user ? <li><a>Log out</a></li> : <li><a>Log in</a></li>}
          </ul>
        </div>
      </div>
    </div >
  )
}


