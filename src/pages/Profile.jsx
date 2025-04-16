import { UserContext } from "../context/UserContext";
import { useState, useEffect, useContext } from "react";
import { Form, useNavigate } from "react-router-dom";
import { uploadImage } from "../utils/uploadImage";
import { extractUrlAndId } from "../utils/utilities";
import { NotFound } from "./NotFound";
import React from "react";
import { useForm } from "react-hook-form";
import { getWorkerIdFromEmail } from "../utils/analytics_systemUtils";
import { readSingleWorker, updateWorkerPhoto } from "../utils/crudUtil";
import { toast } from "sonner";

export const Profile = () => {
  const { user, updateUser } = useContext(UserContext);
  const [avatar, setAvatar] = useState(null);
  const [workerId, setWorkerId] = useState("");
  const [worker, setWorker] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    user?.photoURL && setAvatar(extractUrlAndId(user.photoURL).url);
    const loadWorker = async()=> {
      const worker_id = await getWorkerIdFromEmail(user?.email);
      await readSingleWorker(worker_id, setWorker);
      setWorkerId(worker_id);
    }
    loadWorker()
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
      const toastId = toast.loading("Updating profile...") // Loading toast

      const file = data?.file ? data?.file[0] : null;
      const { url, id } = file ? await uploadImage(file) : null;
      const workerid = await getWorkerIdFromEmail(user?.email);
      await updateWorkerPhoto(workerid, url);

      await updateUser(data.displayName, url + "/" + id);

      toast.dismiss(toastId)
      setTimeout(() => navigate("/"), 1500);
    } catch (error) {
      console.log(error);
    }
  };

  function validateFile(value) {
    if (!value[0]) return true;

    const acceptedFormats = ["jpg", "png"];
    const fileExtension = value[0].name.split(".").pop().toLowerCase();

    if (!acceptedFormats.includes(fileExtension)) {
      toast.error("Only JPG/PNG files allowed");
      return false;
    }

    if (value[0].size > 1 * 1024 * 1024) {
      toast.error("File size must be less than 1MB");
      return false;
    }

    return true;
  }

  return (
    <div className="bg-gray-950 min-h-screen flex flex-col items-center justify-center">
      <div className="text-center justify-center flex flex-wrap mt-10">
        <h1 className="text-3xl wlh12 font-bold m-0 md:m-17">Profile</h1>
      </div>

      <div className="card md:card-side bg-gray-700 border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 w-3xs md:w-auto">
        <figure className="w-full md:w-48 border-2 border-black flex-shrink-0 max-h-[50vh] overflow-hidden">
          <img
            src={avatar || "../public/blankpeople.jpg"}
            alt="Profile"
            className="object-cover w-full h-full max-h-[50vh]"
          />
        </figure>
        <div className="card-body p-6">
          <Form onSubmit={handleSubmit(onSubmit)}>
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
                  className="input input-bordered w-full bg-gray-500"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-medium">
                  Worker ID:{" "}
                  <span className="font-normal">{workerId && workerId}</span>
                </h3>
                <p className=" text-white">
                  Job Title:{" "}
                  <span className="font-medium">{worker && worker.field}</span>
                </p>
              </div>
            </div>

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
                className="file-input file-input-neutral"
              />
            </div>

            <div className="card-actions justify-end mt-8">
              <button className="btn btn-soft btn-success w-full" type="submit">
                Save changes
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};
