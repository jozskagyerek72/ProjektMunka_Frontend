import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";
import { Toaster } from "sonner";

export const Toast = ({
  signin,
  err,
  signup,
  signout,
  resetpassword,
  update,
}) => {
  const { setMsg } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (err) {
      toast.error(err, { position: "top-left" });
    } else if (signin || signup || resetpassword || signout) {
      toast.success(signin || signup, { position: "top-center" });
      setTimeout(() => navigate("/"), 1000);
    } else if (update) {
      toast.success(update, { position: "top-center" });
    }

    setMsg({});
  }, [signin, err, signup, signout, resetpassword, update]);

  return (
    <div>
      <Toaster />
    </div>
  );
};
