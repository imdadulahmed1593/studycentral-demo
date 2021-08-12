import { UsersIcon } from "@heroicons/react/solid";
import Members from "./Members";
import ProgramManager from "./ProgramManager";

const BannerInfo = () => {
  return (
    <div className="flex-1">
      <div className="bg-white p-10  space-y-10 ">
        <div className="flex justify-between items-start">
          <div className="flex items-start ">
            <img
              loading="lazy"
              className="-mt-28 mr-5"
              src="/images/logo.jpg" // Route of the image file
              height={144} // Desired size with correct aspect ratio
              width={144} // Desired size with correct aspect ratio
              alt="logo"
            />
            <div>
              <span className="text-lg font-semibold">University Name</span>
              <h1 className="text-2xl font-bold">Program Name</h1>
            </div>
          </div>

          <div className="flex item-center">
            <div className="flex items-center mr-5 space-x-2">
              <UsersIcon className="h-6 cursor-pointer" />{" "}
              <span className="text-lg font-bold">35</span>
            </div>
            <button className="bg-yellow-300 px-10 py-2 rounded-lg font-bold">
              JOIN
            </button>
          </div>
        </div>

        <div>
          <p className="font-normal text-justify text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            veritatis dignissimos obcaecati, voluptatibus aspernatur repellendus
            exercitationem doloremque, incidunt quae quis inventore unde cumque
            amet molestiae dolore minima architecto dolorum iusto ipsa, ullam
            debitis. Minus possimus consequatur assumenda cum hic corrupti
            provident, aliquid ullam inventore nihil exercitationem quos
            explicabo voluptates tempore?
          </p>
        </div>
      </div>

      <div className="flex justify-between my-5">
        <ProgramManager />
        <Members />
      </div>
    </div>
  );
};

export default BannerInfo;
