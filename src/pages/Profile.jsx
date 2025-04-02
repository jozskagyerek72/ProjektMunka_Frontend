import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { uploadImage } from "../utils/uploadImage";
import { extractUrlAndId } from "../utils/utilities";
import { NotFound } from "./NotFound";
import React from "react";
import { useForm } from "react-hook-form";
import { getWorkerIdFromEmail } from "../utils/analytics_systemUtils";
import { updateWorkerPhoto } from "../utils/crudUtil";

export const Profile = () => {
  const { user, updateUser, msg, signOutUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [workerId, setWorkerId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    (async () => {
      
      setWorkerId(await(getWorkerIdFromEmail(user?.email)));
    })
  }, [user]);
  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      displayName: user?.displayName || "",
    },
  });

  if (!user) return <NotFound />;

  const onSubmit = async (data) => {
    try {
      const file = data?.file ? data?.file[0] : null;
      const { url, id } = file ? await uploadImage(file) : null;
      console.log(user?.email);
      const workerid = await getWorkerIdFromEmail(user?.email);
      await updateWorkerPhoto(workerid, url);
      updateUser(data.displayName, url + "/" + id);
    } catch (error) {
      console.log(error);
    }
  };

  function validateFile(value) {
    if (!value[0]) return true;

    const acceptedFormats = ["jpg", "png"];
    const fileExtension = value[0].name.split(".").pop().toLowerCase();

    if (!acceptedFormats.includes(fileExtension)) {
      return "Only JPG/PNG files allowed";
    }

    if (value[0].size > 1 * 1024 * 1024) {
      return "File size must be less than 1MB";
    }

    return true;
  }

  return (
    <div className="bg-gray-950 min-h-screen flex items-center justify-center p-4">
      <div className="card card-side bg-base-100 border-2 border-gray-300 shadow-xl max-w-3xl">
        {/* Avatar section */}
        {avatar && (
          <figure className="w-48 border-2 border-black flex-shrink-0">
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </figure>
        )}

        {/* Form section */}
        <div className="card-body p-6">
          <Form onSubmit={handleSubmit(onSubmit)}>
            {/* Profile info */}
            <div className="space-y-4">
              <h2 className="card-title text-2xl font-bold">Worker Profile</h2>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  {...register("displayName")}
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-medium">
                  Worker ID:{" "}
                  <span className="font-normal">{workerId && workerId}</span>
                </h3>
                <p className="text-gray-600">
                  Job Title:{" "}
                  <span className="font-medium">Senior Technician</span>
                </p>
              </div>
            </div>

            {/* File upload */}
            <div className="form-control mt-6">
              <label className="label">
                <span className="label-text">Profile Picture</span>
              </label>
              <input
                {...register("file", {
                  validate: validateFile,
                })}
                type="file"
                accept=".jpg,.png"
                onChange={(e) =>
                  e.target.files?.[0] &&
                  setAvatar(URL.createObjectURL(e.target.files[0]))
                }
                className="file-input file-input-bordered w-full"
              />
              {errors.file && (
                <p className="mt-2 text-sm text-error">{errors.file.message}</p>
              )}
            </div>

            {/* Submit button */}
            <div className="card-actions justify-end mt-8">
              <button
                className="btn btn-primary w-full sm:w-auto"
                type="submit"
              >
                Save Changes
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>

  );
};
