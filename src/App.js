import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Routes>
        <Route exact path="*" element={<HomePage />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
