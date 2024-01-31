"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const checkScreenWidth = () => {
    setIsSmallScreen(window.innerWidth <= 680);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const specific = document.getElementById("dropDown");
      if (specific && isMenuOpen && !specific.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  function scrollToHome() {
    window.scrollTo({
      top: 0,
    });
  }
  function scrollToAbout() {
    const element = document.getElementById("aboutSection");
    element.scrollIntoView();
  }
  function scrollToProjects() {
    const element = document.getElementById("projectsSection");
    element.scrollIntoView();
  }

  function handleMenuClick(e) {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="bg-blue text-white flex lg:p-6 px-4 py-2 items-center fixed w-screen border-b border-white border-opacity-15 z-[100]">
      <img src="memoji.png" className="w-14 lg:ml-3"></img>
      <p className="flex-grow text-xl ml-2 ">tom west</p>
      <div className="flex">
        {isSmallScreen ? (
          <div
            className={`border p-1 rounded-lg hover:cursor-pointer relative ${
              isMenuOpen ? "bg-smoke bg-opacity-30" : null
            }`}
            onClick={handleMenuClick}
          >
            <img src="menu.png" className="invert w-7 min-w-7"></img>
            {isMenuOpen ? (
              <ul
                className={`absolute bg-smoke text-blue p-1 rounded-xl -bottom-[8.5rem] -left-20 w-32 text-center border `}
                id="dropDown"
              >
                <li
                  className="hover:cursor-pointer hover:bg-jet hover:bg-opacity-40 transition rounded p-1"
                  onClick={scrollToHome}
                >
                  home
                </li>
                <hr className="my-1 opacity-40 "></hr>
                <li
                  className="hover:cursor-pointer hover:bg-jet hover:bg-opacity-40 transition rounded p-1"
                  onClick={scrollToAbout}
                >
                  about
                </li>
                <hr className="my-1 opacity-40"></hr>
                <li
                  className="hover:cursor-pointer hover:bg-jet hover:bg-opacity-40 transition rounded p-1"
                  onClick={scrollToProjects}
                >
                  projects
                </li>
              </ul>
            ) : null}
          </div>
        ) : (
          <ul className="flex justify-between items-center w-56">
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={scrollToHome}
            >
              home
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={scrollToAbout}
            >
              about
            </li>
            <li
              className="hover:underline hover:cursor-pointer"
              onClick={scrollToProjects}
            >
              projects
            </li>
          </ul>
        )}
        <ul
          className={`flex justify-between items-center ml-2 ${
            isSmallScreen ? "order-first" : null
          }`}
        >
          {!isSmallScreen ? " | " : null}
          <li className="flex items-center justify-between ml-2">
            <Link href="https://github.com/tomwvwest" target="_blank">
              <img
                src="github_logo.png"
                className="invert mr-2 w-9 min-w-9 hover:opacity-70"
              ></img>
            </Link>
            <Link href="http://www.linkedin.com/in/tomwvwest" target="_blank">
              <img
                src="linked_in_logo.png"
                className="invert w-10 min-w-10 hover:opacity-70"
              ></img>
            </Link>
          </li>
          {isSmallScreen ? <p className="pr-3 pl-2"> | </p> : null}
        </ul>
      </div>
    </div>
  );
};
