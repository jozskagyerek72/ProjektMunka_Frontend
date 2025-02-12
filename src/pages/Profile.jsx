//import React from 'react'

import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Profile = () => {

    const { user, updateUser, msg, signOutUser } = useContext(UserContext)
    const [avatar, setAvatar] = useState(null)
    const navigate = useNavigate    ()

    return (
        <div className="flex items-center justify-center h-screen">
            <div class="card card-side bg-base-100 h-100 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

