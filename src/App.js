import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import StudentLogin from "./auth/StudentLogin";
import FacultyLogin from "./auth/FacultyLogin";
import OwnerLogin from "./auth/OwnerLogin";
import StudentRegister from "./auth/StudentRegister";
import FacultyRegister from "./auth/FacultyRegister";
import OwnerRegister from "./auth/OwnerRegister";
import StudentMenu from "./components/student/StudentMenu";
import FacultyMenu from "./components/faculty/FacultyMenu";
import OwnerPage from "./components/owner/OwnerPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/studentlogin" element={<StudentLogin />} />
          <Route path="/facultylogin" element={<FacultyLogin />} />
          <Route path="/ownerlogin" element={<OwnerLogin />} />
          <Route path="/studentregister" element={<StudentRegister />} />
          <Route path="/facultyregister" element={<FacultyRegister />} />
          <Route path="/ownerregister" element={<OwnerRegister />} />
          <Route path="/student/studentmenu" element={<StudentMenu />} />
          <Route path="/faculty/facultymenu" element={<FacultyMenu />} />
          <Route path="/owner/ownerpage" element={<OwnerPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
