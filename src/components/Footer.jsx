import { useNavigate } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white-content py-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4 md:gap-20">
        <aside className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <img src="./public/WL(good).png" height="50" width="50" className="rounded-full"/>
          <p className="font-bold text-center md:text-left mt-2">
            WorkLinker inc.
            <br />
            Providing reliable work tracking.
          </p>
          <a
            href="/contact"
            className="underline text-blue-500 hover:text-blue-700 mt-2"
          >
            Contact us
          </a>
        </aside>

        <nav className="mt-4 md:mt-0">
          <a
            href="https://github.com/jozskagyerek72/ProjektMunka_Frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              src="./public/github-mark-white.svg"
              alt="GitHub svg"
              width="24"
              height="24"
              className="fill-current"
            />
          </a>
        </nav>
      </div>
    </footer>
  );
};
