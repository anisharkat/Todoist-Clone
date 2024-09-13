import { CiCircleCheck } from "react-icons/ci";
import { FaPenFancy } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

const TasksSection = () => {
  return (
    <div className="w-full md:w-3/4 mx-4 md:mx-8 my-4 md:my-8 max-h-screen">
      <h1 className="mt-2 font-bold text-xl md:text-2xl">Your Tasks :</h1>
      <div className="flex flex-col gap-4 mt-8 mr-16">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex px-2 py-4 bg-slate-50 items-center gap-3 justify-between rounded-md cursor-pointer">
            <div className="flex items-center gap-4 font-semibold">
              <CiCircleCheck className="text-xl md:text-2xl" />
              <h1>Task {index + 1}</h1>
            </div>
            <div className="flex gap-4 text-lg md:text-xl cursor-pointer">
              <MdDeleteOutline />
              <FaPenFancy />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TasksSection;
