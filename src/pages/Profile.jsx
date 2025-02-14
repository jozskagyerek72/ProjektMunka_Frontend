import { UserContext } from "../context/UserContext"
import { useState, useEffect, useContext } from "react"
import { Form, useNavigate } from "react-router-dom"
import { uploadImage } from "../utils/uploadImage"
import { extractUrlAndId } from "../utils/utilities"
import { NotFound } from "./NotFound"
import React from "react"
import { useForm } from "react-hook-form"

export const Profile = () => {

    const { user, updateUser, msg, signOutUser } = useContext(UserContext)
    const [avatar, setAvatar] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        user?.imageURL && setAvatar(extractUrlAndId(user.imageURL).url)
    }, [user])

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            displayName: user?.displayName || '',
        }
    });

    if (!user) return <NotFound />

    const onSubmit = async (data) => {
        try {
            const file = data?.file ? data?.file[0] : null
            const { url, id } = file ? await uploadImage(file) : null
            updateUser(data.displayName, url + '/' + id)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-gray-950 flex items-center justify-center h-screen">
            <div className="card card-side flex border-gray-300 border-2 m-10 bg-base-100 h-100 shadow-xl">
                {avatar &&
                    <figure className="border-3 w-50 border-black">
                        <img className="w-50"
                            src={avatar}
                            alt="Profile picture" />
                    </figure>
                }
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="card-body p-2">
                        <h2 className="card-title text-2xl">*Worker Name*</h2>
                        <input {...register('displayName')} type="text" />
                        <h3>*Worker ID*</h3>
                        <p>*Job description*</p>
                        <div className="card-actions justify-end">
                            <input {...register('file', {
                                validate: (value) => {
                                    if (!value[0]) return true
                                    const acceptedFormats = ['jpg', 'png']
                                    const fileExtension = value[0].name.split('.').pop().toLowerCase()
                                    if (!acceptedFormats.includes(fileExtension)) return "invalid file format"
                                    if (value[0].size > 1 * 1000 * 1024) return "maximum file size is 1MB"
                                    return true

                                }
                            })} type="file"
                                onChange={(e) => setAvatar(URL.createObjectURL(e.target.files[0]))}
                            />
                        </div>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary w-45" type="submit">Submit</button>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

