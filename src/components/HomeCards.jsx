import React from "react";
import { useNavigate } from "react-router-dom";

export const HomeCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: "HR portal",
      description: "Manage workers and applicants",
      btnText: "HR login",
      imgUrl: "./Hra.jpg",
      navigateTo: "/signin",
    },
    {
      title: "Worker portal",
      description: "Analyze your statistics",
      btnText: "Worker login",
      imgUrl: "./worker.jpg",
      navigateTo: "/signin",
    },
    {
      title: "Apply",
      description: "Join WorkLinker",
      btnText: "Join",
      imgUrl: "./apply.jpg",
      navigateTo: "/apply",
    },
  ];

  return (
    <div className="flex justify-evenly gap-10 items-center flex-col md:flex-row flex-wrap w-full px-5 md:px-0">
      {cards &&
        cards.map((card) => (
          <div key={card.id} className="card bg-base-100 h-full w-full md:h-100 md:w-140 image-full border border-transparent hover:border-gray-400 text-primary-content transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-gray-800/50 shadow-xs">
            <figure>
              <img
                src={card.imgUrl}
                alt={card.description}
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions justify-end mt-auto">
                <button
                  className="btn btn-primary hover:scale-[1.03] duration-300 transition-all hover:border-primary-content"
                  onClick={() => navigate(`${card.navigateTo}`)}
                >
                  {card.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
