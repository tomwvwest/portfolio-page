import { useState } from "react";

export const AboutSection = () => {
  const [displayText, setDisplayText] = useState("Profile");
  const textObject = {
    profileText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laboru",
    skillsText: "bla blah blah",
  };

  function changeState(e) {
    const text = e.target.innerText;
    setDisplayText(text);
  }

  return (
    <section className="h-screen bg-smoke pt-24 p-5 text-blue">
      <div className="translate-x-36 translate-y-10 w-fit">
        <div className="flex items-end mb-6">
          <img src="about.png" className="w-8"></img>
          <p className="text-xs italic -translate-y-[2px]">about</p>
        </div>
        <div className="flex justify-between w-[50vw]">
          <p
            onClick={changeState}
            className={`${
              displayText === "Profile"
                ? "underline text-red"
                : "hover:opacity-70 hover:cursor-pointer"
            }`}
          >
            Profile
          </p>
          <p
            onClick={changeState}
            className={`${
              displayText === "Skills"
                ? "underline text-red"
                : "hover:opacity-70 hover:cursor-pointer"
            }`}
          >
            Skills
          </p>
          <p onClick={changeState} className={`${
              displayText === "Experience" ? "underline text-red" : "hover:opacity-70 hover:cursor-pointer"
            }`}>Experience</p>
          <p onClick={changeState} className={`${
              displayText === "Education" ? "underline text-red" : "hover:opacity-70 hover:cursor-pointer"
            }`}>Education</p>
          <p onClick={changeState} className={`${
              displayText === "Hobbies" ? "underline text-red" : "hover:opacity-70 hover:cursor-pointer"
            }`}>Hobbies</p>
        </div>
        <div
          className={`border-t p-3 w-[70vw] mt-5 absolute transition duration-500 ${
            displayText === "Profile" ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* <hr className="-translate-y-6 w-4 translate-x-3 rotate-90"></hr> */}
          {textObject.profileText}
        </div>
        <div
          className={`border-t p-3 w-[70vw] mt-5 absolute ${
            displayText === "Skills" ? "opacity-100" : "opacity-0"
          }  transition duration-500`}
        >
          {textObject.skillsText}
        </div>
        <div
          className={`border-t p-3 w-[70vw] mt-5 absolute ${
            displayText === "Experience" ? "opacity-100" : "opacity-0"
          }  transition duration-500`}
        >
          {textObject.skillsText}
        </div>
        <div
          className={`border-t p-3 w-[70vw] mt-5 absolute ${
            displayText === "Education" ? "opacity-100" : "opacity-0"
          }  transition duration-500`}
        >
          {textObject.skillsText}
        </div>
        <div
          className={`border-t p-3 w-[70vw] mt-5 absolute ${
            displayText === "Hobbies" ? "opacity-100" : "opacity-0"
          }  transition duration-500`}
        >
          {textObject.skillsText}
        </div>
      </div>
    </section>
  );
};
