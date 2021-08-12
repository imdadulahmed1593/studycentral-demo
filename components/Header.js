import Image from "next/image";
import Link from "next/link";
import { SearchIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-md">
      <header className="max-w-screen-2xl mx-auto flex px-10 py-10 items-top justify-between ">
        <div className="space-y-5">
          <div className="flex justify-start">
            <div className="bg-yellow-300 h-8 w-1"></div>
            <div className="bg-yellow-300 h-8 w-1"></div>
            <div className="bg-yellow-300 h-8 w-1"></div>
            <h1 className="text-2xl font-extralight ml-2">
              STUDY<span className="font-bold">CENTRAL</span>
            </h1>
          </div>
          <nav className="space-x-5">
            <Link href="/">
              <a className="text-lg ">Home</a>
            </Link>
            <Link href="/">
              <a className="text-lg ">Messaging</a>
            </Link>
            <Link href="/">
              <a className="text-lg ">Events</a>
            </Link>
            <Link href="/">
              <a className="text-lg ">Program</a>
            </Link>
          </nav>
        </div>

        <div className="flex items-center rounded-lg p-5 flex-grow mx-20 border border-gray-300 h-10">
          <SearchIcon className="h-6 cursor-pointer mr-5" />
          <input type="text" className="focus:outline-none" />
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col  items-end">
            <h2 className="text-xl font-bold">Hello Kai!</h2>
            <h2 className="text-xl font-light">
              profile <span className="font-bold">|</span> log-out
            </h2>
          </div>
          <div className="h-14 w-14 ml-5 rounded-full">
            <img
              className="w-full rounded-full object-cover"
              src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-1/c0.0.240.240a/p240x240/138253763_3720610927985479_9037001452166004464_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=RpB5ejXtIyIAX8WzcEQ&_nc_ht=scontent.fdac14-1.fna&oh=45ccdd4cbdd2166954c7431b0a74a04c&oe=6139E95E"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
