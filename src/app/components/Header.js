import Link from "next/link";

export const Header = () => {
  return (
    <div className="bg-blue text-white flex p-6 items-center">
      <p className="flex-grow text-xl ml-4">tom west</p>
      <ul className="flex justify-between items-center w-80">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">About</li>
        <li className="hover:underline">Projects</li>|
        <li className="flex items-center justify-between">
          <Link href="https://github.com/tomwvwest">
            <img
              src="github_logo.png"
              className="invert mr-2 w-9 hover:opacity-70"
            ></img>
          </Link>
          <Link href="http://www.linkedin.com/in/tomwvwest">
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
