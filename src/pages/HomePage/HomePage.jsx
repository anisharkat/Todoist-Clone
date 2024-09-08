import { Footer } from "../../components/Footer/Footer";
import { KickStart } from "../../components/KickStart/KickStart";
import { MainSection } from "../../components/MainSection/MainSection";
import { Navbar } from "../../components/Navbar/Navbar";
import { TaskManager } from "../../components/TaskManager/TaskManager";


export const HomePage = () => {
  return (
    <>
    <Navbar />
    <MainSection/>
    <KickStart/>
    <TaskManager/>
    <Footer />
    </>
  );
};