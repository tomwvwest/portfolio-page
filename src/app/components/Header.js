"use client";
import Link from "next/link";
import { useEffect } from "react";

function scrollToHome() {
  window.scrollTo({
    top: 0,
  });
}
function scrollToAbout() {
  window.scrollTo({
    top: 700,
  });
}
function scrollToProjects() {
  window.scrollTo({
    top: 1635,
  });
}

export const Header = () => {
  return (
    <div className="bg-blue text-white flex p-6 items-center fixed w-screen border-b border-white border-opacity-15 z-[100]">
      <img src="memoji.png" className="w-14 ml-3"></img>
      <p className="flex-grow text-xl ml-2">tom west</p>
      <ul className="flex justify-between items-center w-80">
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
        <li className="hover:underline hover:cursor-pointer" onClick={scrollToProjects}>projects</li>|
        <li className="flex items-center justify-between">
          <Link href="https://github.com/tomwvwest" target="_blank">
            <img
              src="github_logo.png"
              className="invert mr-2 w-9 hover:opacity-70"
            ></img>
          </Link>
          <Link href="http://www.linkedin.com/in/tomwvwest" target="_blank">
            <img
              src="linked_in_logo.png"
              className="invert w-10 hover:opacity-70"
            ></img>
          </Link>
        </li>
      </ul>
    </div>
  );
};
