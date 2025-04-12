import { useNavigate } from "react-router-dom";
import { AboutUs } from "../components/AboutUs";
import { QR } from "../components/QR";
import { HomeCards } from "../components/HomeCards";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-dvh bg-gray-950 flex flex-wrap justify-center items-center flex-col pt-20 pb-10 md:gap-20 gap-5">
      <div>
        <h1 className="wlh1 p-2">WorkLinker</h1>
        <p className="wlp text-3xl">
          <button
            onClick={() => navigate("/hrcontact")}
            className="hover:text-purple-400 transition-colors"
          >
            Building teams - Nurturing growth - Inspiring success.
          </button>
        </p>
      </div>

      <HomeCards />

      <div className="flex justify-center flex-col lg:flex-row items-center gap-10 w-full px-5 lg:px-10">
        <AboutUs />
        <QR />
      </div>
    </div>
  );
};
