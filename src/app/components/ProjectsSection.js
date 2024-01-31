import { useState } from "react";

export const ProjectSection = () => {
  const gymieUrls = ["gymie1.png", "gymie2.png", "TeamGymieVideo.mp4"];
  const [currentGymieUrl, setCurrentGymieUrl] = useState(0);
  const newsUrls = [
    "news1.png",
    "news2.png",
    "news3.png",
    "news4.png",
    "news5.png",
  ];
  const [currentNewsUrl, setCurrentNewsUrl] = useState(0);

  function handleChangeGymieUrl(e) {
    const id = e.target.parentElement.id;
    if (id === "backwardPhoto") {
      if (currentGymieUrl === 0) setCurrentGymieUrl(gymieUrls.length - 1);
      else setCurrentGymieUrl((current) => (current -= 1));
    } else if (id === "forwardPhoto") {
      if (currentGymieUrl === gymieUrls.length - 1) setCurrentGymieUrl(0);
      else setCurrentGymieUrl((current) => (current += 1));
    }
  }
  function handleChangeNewsUrl(e) {
    const id = e.target.parentElement.id;
    if (id === "backwardPhoto") {
      if (currentNewsUrl === 0) setCurrentNewsUrl(newsUrls.length - 1);
      else setCurrentNewsUrl((current) => (current -= 1));
    } else if (id === "forwardPhoto") {
      if (currentNewsUrl === newsUrls.length - 1) setCurrentNewsUrl(0);
      else setCurrentNewsUrl((current) => (current += 1));
    }
  }

  return (
    <section
      className=" bg-glaucous lg:pt-24 pt-12 p-5 text-white pb-20"
      id="projectsSection"
    >
      <div className="px-2 lg:px-20 pt-12">
        <div className="">
          <div className="flex items-end mb-10 ">
            <img src="projects.png" className="w-8 invert"></img>
            <p className="text-xs italic -translate-y-[2px] ml-1">projects</p>
          </div>

          <div className="flex lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2">
              <p className="flex lg:flex-row flex-col items-baseline">
                <span className="font-bold text-3xl">Gym App </span>
                <span className="font-normal italic text-sm lg:pl-4">
                  Group Project | Dec'23-Jan'24
                </span>{" "}
              </p>
              <ul className="list-disc mt-4 ml-6 space-y-2">
                <li>
                  This three-week group project resulted in a functioning gym
                  app, built using Next.js and Prisma, which could track a
                  user's gym progress and post it on their profile.
                </li>
                <li>
                  I stepped up to head the front-end and tasked myself with
                  learning Next.js and Tailwind in a couple days.
                </li>
                <li>
                  Overall, I completed the majority of the final front-end
                  product, with error-handling, and gained experience reading
                  and understanding Prisma.
                </li>
                <li>
                  Participated in a video demonstration of the app which can be
                  found in the repo link.
                </li>
                <li>
                  A challenge we faced on this project was when a group member
                  abruptly left after app planning was completed, meaning we had
                  to re-plan and adapt to a larger work load.
                </li>
              </ul>
            </div>
            <div className="relative h-fit lg:w-1/2 self-center lg:ml-8 mb-10 ">
              {currentGymieUrl !== 2 ? (
                <img
                  src={gymieUrls[currentGymieUrl]}
                  className="w-[60vw] rounded-2xl min-w-80 "
                ></img>
              ) : (
                <video
                  className="w-[60vw] rounded-2xl min-w-80"
                  controls
                  src="TeamGymieVideo.mp4"
                  type="video/mp4"
                ></video>
              )}

              <div className="flex items-center w-fit gap-3 absolute top-3 right-5">
                <button
                  id="backwardPhoto"
                  className="bg-jet opacity-80 w-fit flex items-center rounded-full p-[2px] h-fit hover:cursor-pointer hover:opacity-100"
                  onClick={handleChangeGymieUrl}
                >
                  <img src="back-arrow.png" className="invert"></img>
                </button>
                <button
                  id="forwardPhoto"
                  className="bg-jet opacity-80 w-fit flex h-fit items-center rounded-full p-[2px] hover:cursor-pointer hover:opacity-100"
                  onClick={handleChangeGymieUrl}
                >
                  <img src="back-arrow.png" className="rotate-180 invert"></img>
                </button>
                <div className=" rounded-full bg-jet opacity-80 w-fit px-2 py-1 top-2 right-2">
                  {currentGymieUrl + 1}/{gymieUrls.length}
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="opacity-30 my-8" />

        <div className="mt-6 flex lg:flex-row flex-col ">
          <div className=" lg:w-2/5 w-2/5 relative self-center min-w-[280px] max-w-[300px] mb-10">
            <img src={newsUrls[currentNewsUrl]} className=" rounded-2xl"></img>
            <div className="flex items-center w-fit gap-3 absolute top-3 right-5">
              <button
                id="backwardPhoto"
                className="bg-jet opacity-80 w-fit flex items-center rounded-full p-[2px] h-fit hover:cursor-pointer hover:opacity-100"
                onClick={handleChangeNewsUrl}
              >
                <img src="back-arrow.png" className="invert"></img>
              </button>
              <button
                id="forwardPhoto"
                className="bg-jet opacity-80 w-fit flex h-fit items-center rounded-full p-[2px] hover:cursor-pointer hover:opacity-100"
                onClick={handleChangeNewsUrl}
              >
                <img src="back-arrow.png" className="rotate-180 invert"></img>
              </button>
              <div className=" rounded-full bg-jet opacity-80 w-fit px-2 py-1 top-2 right-2">
                {currentNewsUrl + 1}/{newsUrls.length}
              </div>
            </div>
          </div>
          <div className="lg:w-3/5 lg:pl-12">
            <p className="pt-4 flex lg:flex-row flex-col items-baseline">
              <span className="font-bold text-3xl">News App </span>
              <span className=" font-normal italic text-sm lg:pl-4">
                Solo Project | Dec'23
              </span>{" "}
            </p>
            <ul className="list-disc mt-4 ml-6 space-y-4">
              <li>
                This solo project involved creating an API using Javascript and
                PSQL to produce a News App in React.
              </li>
              <li>
                The user is able to browse articles to read, comment on and
                upvote.
              </li>
              <li>
                Articles can be sorted by date, vote count and comment count in
                ascending and descending order
              </li>
              <li>
                Thorough testing and error-handling was set up for the design of
                the server to ensure stability within the back-end.
              </li>
              <li>
                The front-end includes an advanced design with adaptability for
                varying screen sizes as well as sufficient error-handling and
                optimistic rendering.
              </li>
            </ul>
          </div>
        </div>
        <hr className="opacity-30 my-8" />
        <p className="font-bold text-3xl italic">with plenty more to come...</p>
      </div>
    </section>
  );
};
