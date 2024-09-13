import SideBar from "../../components/SideBar/SideBar";
import TasksSection from "../../components/TasksSection/TasksSection";



const TasksPage = () => {
  return (
    <div className="flex w-full h-full justify-between overflow-">
      <SideBar/>
      <TasksSection/>
    </div>
  );
};

export default TasksPage;