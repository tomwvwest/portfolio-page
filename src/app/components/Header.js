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
    <div className="bg-blue text-white flex p-6 items-center fixed w-screen border-b border-white border-opacity-15 z-[100]">
      <img src="memoji.png" className="w-14 lg:ml-3"></img>
      <p className="flex-grow text-xl ml-2">tom west</p>
      {isSmallScreen ? (
        <div
          className="border p-1 rounded-lg hover:cursor-pointer relative"
          onClick={handleMenuClick}
        >
          <img src="menu.png" className="invert"></img>
          {isMenuOpen ? (
            <ul>
              <li
                className="hover:cursor-pointer hover:bg-jet hover:bg-opacity-40 transition rounded p-1"
                onClick={scrollToHome}
              >
                home
              </li>
              <hr className="my-1 opacity-40"></hr>
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
      <ul className="flex justify-between items-center ml-2">
        |
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
      </ul>
    </div>
  );
};
