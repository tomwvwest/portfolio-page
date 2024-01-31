export const HomeSection = () => {
  return (
    <section className="bg-blue py-16 lg:px-16 px-10 pt-24 pb-48 text-white justify-center ">
      <div className="flex lg:flex-row flex-col-reverse ">
        <div className="h-fit rounded-3xl lg:p-10 self-center lg:w-3/5 ">
          <div className="flex items-end mb-6 ">
            <img src="home.png" className="w-8 invert"></img>
            <p className="text-xs italic -translate-y-[2px]">home</p>
          </div>
          <p>hello, my name is</p>
          <p className="text-8xl font-bold">tom.</p>
          <p className="mt-3">
            i am a junior software engineer and university of bath physics
            graduate looking to put my problem solving and technical skills into
            contributing to innovative solutions.
          </p>
          <p className="mt-3">
            my goal is to become an elite software engineer.
          </p>
          <p className="mt-3 opacity-70">
            contact me:{" "}
            <span className="italic text-red">tomwvwest@gmail.com</span> /{" "}
            <span className="italic text-red">07807376734</span>
          </p>
          <p className="opacity-70">
            my CV:{" "}
            <a
              href="/TomWestCV.pdf"
              target="_blank"
              className="hover:cursor-pointer hover:underline text-red"
            >
              view
            </a>{" "}
            /{" "}
            <a
              href="/TomWestCV.pdf"
              download
              className="hover:cursor-pointer hover:underline text-red"
            >
              download
            </a>
          </p>
        </div>
        <div className=" lg:w-2/5 flex items-center justify-center">
          <div className="p-4 rounded-full border-red border ">
            <img
              src="profile-photo.jpg"
              className="lg:w-[30vw] lg:h-[30vw] w-[40vw] h-[40vw] min-w-[264px] min-h-[264px] object-cover rounded-full"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
