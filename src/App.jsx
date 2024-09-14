import { HomePage } from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignupPage } from "./pages/SignupPage/SignupPage";
import TasksPage from "./pages/TasksPage/TasksPage";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/tasks" element={<TasksPage/>} />
        </Routes>
      </Router>

    </>
  );
}

export default App;