import { useEffect, useState } from "react";

export const AboutSection = () => {
  const [displayText, setDisplayText] = useState("profile");
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  function changeState(e) {
    const text = e.target.innerText;
    setDisplayText(text);
  }

  return (
    <section
      className=" h-[150vh] bg-smoke py-16 lg:px-16 px-10 pt-24 p-5 text-blue"
      id="aboutSection"
    >
      <div className={` flex ${isSmallScreen ? "justify-center" : null}`}>
        <div
          className={`w-[70vw] ${
            isSmallScreen ? "w-[100rem]" : null
          }  min-w-[300px]`}
        >
          <div className="flex items-end mb-10">
            <img src="about.png" className="w-8"></img>
            <p className="text-xs italic -translate-y-[2px]">about</p>
          </div>
          <div
            className={`flex justify-between  ${
              isSmallScreen ? "grid grid-cols-6" : "flex justify-between"
            }`}
          >
            <p
              onClick={changeState}
              className={`${
                displayText === "profile"
                  ? "underline text-red"
                  : "hover:opacity-70 hover:cursor-pointer"
              } ${isSmallScreen ? "text-center col-span-2" : null}`}
            >
              profile
            </p>
            <p
              onClick={changeState}
              className={`${
                displayText === "skills"
                  ? "underline text-red"
                  : "hover:opacity-70 hover:cursor-pointer"
              } ${isSmallScreen ? "text-center col-span-2" : null}`}
            >
              skills
            </p>
            <p
              onClick={changeState}
              className={`${
                displayText === "experience"
                  ? "underline text-red"
                  : "hover:opacity-70 hover:cursor-pointer"
              } ${isSmallScreen ? "text-center col-span-2" : null}`}
            >
              experience
            </p>
            <p
              onClick={changeState}
              className={`${
                displayText === "education"
                  ? "underline text-red"
                  : "hover:opacity-70 hover:cursor-pointer"
              } ${isSmallScreen ? "text-center col-span-3 mt-2" : null}`}
            >
              education
            </p>
            <p
              onClick={changeState}
              className={`${
                displayText === "hobbies"
                  ? "underline text-red"
                  : "hover:opacity-70 hover:cursor-pointer"
              } ${isSmallScreen ? "text-center col-span-3 mt-2" : null}`}
            >
              hobbies
            </p>
          </div>

          <div className={` ${isSmallScreen ? "flex justify-center" : null}`}>
            <div
              className={`border-t p-3 w-[70vw] mt-5 absolute transition duration-500 ${
                displayText === "profile" ? "opacity-100" : "opacity-0"
              } ${isSmallScreen ? "w-[90vw] text-center" : null}`}
            >
              <p className="mt-2">
                Physics graduate with a strong passion for coding and using my
                analytical problem-solving skills to contribute innovative
                solutions in software development. I have recently finished an
                intensive Software Bootcamp which has given me a diverse array
                of technical skills and experience with paired programming. I am
                eager to apply my logical mindset, creativity, and desire to
                learn to help me reach my goal of being an elite software
                engineer.
              </p>
            </div>
            <div
              className={`border-t px-5 py-3 w-[70vw] mt-5 absolute ${
                displayText === "skills" ? "opacity-100" : "opacity-0"
              } ${
                isSmallScreen ? "w-[90vw]" : null
              } transition duration-500 flex flex-col justify-between h-48`}
            >
              <p>
                <span className="font-bold">languages</span>: Javascript, using
                Node.js and browsers as environments.
              </p>
              <p>
                <span className="font-bold">testing</span>:
                Test-Driven-Development (TDD), Jest, SuperTest.
              </p>
              <p>
                <span className="font-bold">front-end</span>: React, Next.js,
                HTML, CSS, Tailwind and other accessibility tools.
              </p>
              <p>
                <span className="font-bold">back-end</span>: SQL, PSQL, Prisma,
                seeding, migrations
              </p>
              <p>
                <span className="font-bold">soft skills</span>: paired
                programming, technical communication, agile and SCRUM
                methodologies;.
              </p>
              <p>
                <span className="font-bold">other</span>: hosting with Netlify,
                experience with Git, using Figma, basic experience using Python.
              </p>
              <div className={` mt-6 ${isSmallScreen ? 'w-fit grid grid-cols-3 gap-x-20 gap-y-8 self-center' : 'flex justify-between'}`}>
                <img src="next.png" className="w-16 h-16 self-center min-w-16"></img>
                <img
                  src="psql.png"
                  className="w-16 h-16 min-w-16"
                ></img>
                <img src="react.png" className="w-16 h-16 min-w-16"></img>
                <img
                  src="tailwind.png"
                  className="w-16 h-16 min-w-16"
                ></img>
                <img
                  src="prisma.png"
                  className="w-16 h-16 min-w-16"
                ></img>
                <img
                  src="javascript.png"
                  className="w-16 h-16 min-w-16"
                ></img>
              </div>
            </div>
            <div
              className={`border-t p-3 w-[70vw] mt-5 absolute ${
                displayText === "experience" ? "opacity-100" : "opacity-0"
              } ${isSmallScreen ? "w-[90vw]" : null} transition duration-500`}
            >
              <p className="font-bold mt-3">
                Northcoders Software Engineering Bootcamp |{" "}
                <span className="font-normal italic text-sm">
                  Oct'23-Jan'24
                </span>
              </p>
              <ul className="list-disc space-y-2 mt-2">
                <li>
                  Recently completed a 13-week intensive Software Engineering
                  course which has educated me in a diverse range of coding
                  languages and solidified my technical skills and interest
                  surrounding software engineering.
                </li>
                <li>
                  Working regularly with new partners has hugely strengthened my
                  technical communication, adaptability and comfort in
                  driver/navigator roles.
                </li>
                <li>
                  Covering challenging new topics daily has fostered my ability
                  to quickly pick up new skills.
                </li>
              </ul>
              <p className="font-bold mt-8">
                University Experiments |{" "}
                <span className="font-normal italic text-sm">2019-2023</span>
              </p>
              <ul className="list-disc space-y-2 mt-2">
                <li>
                  Carried out numerous complex experiments, both individually
                  and in groups, which often included coding in Python to
                  present data, strengthening my skills in this language.
                </li>
                <li>
                  I wrote Python code that simulated the physics of a Kater's
                  pendulum to calculate various associated parameters and code
                  that compared images of the night sky to detect passing comets
                  and used LaTeX to produce my report.
                </li>
                <li>
                  Gained leadership skills by planning group experiments,
                  guiding the team to successful outcomes under time pressure,
                  and fostering effective collaboration and communication.
                </li>
              </ul>
            </div>
            <div
              className={`border-t p-3 w-[70vw] mt-5 absolute ${
                displayText === "education" ? "opacity-100" : "opacity-0"
              }  transition duration-500`}
            >
              <ul className="mt-3">
                <li className="grid grid-cols-3">
                  <div className=" col-span-2">
                    <p className="font-bold">
                      University of Bath |{" "}
                      <span className=" font-normal italic text-sm">
                        2019-2023
                      </span>
                    </p>
                    <ul className="list-disc space-y-2 mt-2">
                      <li>Physics BSc, 2:2</li>
                      <li>
                        High 2:1 in final year project : “Can a full-scale
                        vehicle be dynamically modelled as a small-scale
                        vehicle?”
                        <ul className="p-2 ml-3 space-y-2">
                          <li>
                            - Made large electrical adjustments to a
                            remote-control car and used C++ code for an Arduino
                            micro-controller.
                          </li>
                          <li>
                            - Used Python to mathematically analyse my datasets
                            and creatively present them for my 6000-word report.
                          </li>
                          <li>
                            - Presented my findings weekly in front of
                            supervisors.
                          </li>
                          <li>
                            - Completed two formal presentations in front of
                            examiners.
                          </li>
                        </ul>
                      </li>
                      <li>
                        Other relevant modules include: Experimental Physics and
                        Computing (63%), Mathematical Methods for Physics (58%)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img
                      src="uni.jpeg"
                      className="rounded-3xl translate-y-2 col-span-1 w-96"
                    ></img>
                    <img
                      src="rc-car.jpeg"
                      className="rounded-3xl w-96 h-48 object-cover object-bottom-[30px] mt-4"
                    ></img>
                  </div>
                </li>
                <li className="mt-3">
                  <p className="font-bold">
                    Watford Grammar School for Boys |{" "}
                    <span className=" font-normal italic text-sm">
                      2011-2019
                    </span>
                  </p>
                  <ul className="list-disc space-y-2 mt-2">
                    <li>A-Levels: Maths(A), Physics(B), Geography(B).</li>
                    <li>11 GCSEs: 3A*s, 4As, 3Bs, 1C.</li>
                    <li>Captained Badminton and Table Tennis teams. </li>
                    <li>Earned Duke of Edinburugh Bronze Award</li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              className={`border-t p-3 w-[70vw] mt-5 absolute ${
                displayText === "hobbies" ? "opacity-100" : "opacity-0"
              }  transition duration-500`}
            >
              <ul className="space-y-6 mt-4 flex flex-col items-center ">
                <li className="flex items-center">
                  <img src="guitar.png" className="w-7"></img>I enjoy playing my
                  acoustic guitar and bass guitar in my spare time
                </li>
                <li className="flex items-center">
                  I regularly play badminton for my local club, competing in
                  league matches whenever I can{" "}
                  <img src="badminton.png" className="w-7"></img>
                </li>
                <li className="flex items-center">
                  <img src="chess.svg" className="w-6"></img>I play chess daily
                  and love many types of puzzle games{" "}
                </li>
                <li className="flex items-center">
                  I love hiking and visit the Lake District with my family every
                  year<img src="mountains.png" className="w-7"></img>
                </li>
              </ul>
              <img
                src="view.jpeg"
                className="w-60 rotate-3 absolute -right-20 -bottom-56 rounded-3xl -z-10"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
