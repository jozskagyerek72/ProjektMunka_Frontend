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
  update
}) => {
  const { setMsg } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (err) {
      toast.error(err, { position: "top-left" });
    } else if (signin || signup || resetpassword || signout || update) {
      toast.success(signin || signup || resetpassword || signout || update, { position: "top-center" });
      setTimeout(() => navigate("/"), 1500);
    }
    setMsg({});
  }, [signin, err, signup, signout, resetpassword, update]);

  return (
    <Toaster/>
  );
};
