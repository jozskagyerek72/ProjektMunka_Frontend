//import React from 'react'

import { useContext } from "react"
import { UserContext } from "../context/UserContext"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const Profile = () => {

    const { user, updateUser, msg, signOutUser } = useContext(UserContext)
    const [avatar, setAvatar] = useState(null)
    const navigate = useNavigate()

    return (
        <div className="bg-gray-950 flex items-center justify-center h-screen">
            <div className="card card-side border-gray-300 border-2 bg-base-100 h-100 shadow-xl">
                <figure className="border-3 border-black">
                    <img
                        src="https://imgcdn.stablediffusionweb.com/2024/4/19/077e2879-36fd-4520-b63c-926135a71b2d.jpg"
                        alt="Movie" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">*Worker Name*</h2>
                    <h3>*Worker ID*</h3>
                    <p>*Job description*</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Change picture</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

