import { MenuAlt2Icon } from "@heroicons/react/solid";

const Program = () => {
  return (
    <div className="lg:-mt-20 rounded-lg flex-none bg-white p-5 lg:ml-5 lg:mr-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-2xl font-bold mr-16">Program To-Do's</h1>
        <div className="flex items-center">
          <span>All items</span>
          <MenuAlt2Icon className="h-6 cursor-pointer ml-2" />
        </div>
      </div>
      <ul>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 line-through border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 line-through border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 line-through border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
        <li className="flex items-center text-lg p-3 line-through border-b-2 border-gray-900">
          <div className="mr-3 w-2 h-2 rounded-full bg-blue-500"></div>
          Upload block account information
        </li>
      </ul>
    </div>
  );
};

export default Program;
