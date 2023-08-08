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
import AddCategory from "./components/owner/AddCategory";
import AddItem from "./components/owner/AddItem";
import TotalOrders from "./components/owner/TotalOrders";
import ItemPage from "./components/faculty/Cart";
import MyOrders from "./components/faculty/MyOrders";
import { useState, createContext } from "react";
import { CartProvider } from "react-use-cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export const RoleContext = createContext();

function App() {
  const [role, setRole] = useState("");
  const FACrole = (data) => {
    setRole(data);
  };
  const OWNrole = (data) => {
    setRole(data);
  };
  return (
    <div>
      <CartProvider>
        <RoleContext.Provider value={role}>
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/studentlogin" element={<StudentLogin />} />
              <Route
                path="/facultylogin"
                element={<FacultyLogin FACrole={FACrole} />}
              />
              <Route
                path="/ownerlogin"
                element={<OwnerLogin OWNrole={OWNrole} />}
              />
              <Route path="/studentregister" element={<StudentRegister />} />
              <Route path="/facultyregister" element={<FacultyRegister />} />
              <Route path="/ownerregister" element={<OwnerRegister />} />
              <Route path="/student/studentmenu" element={<StudentMenu />} />
              <Route
                path="/faculty/facultymenu"
                element={<FacultyMenu FACrole={FACrole} />}
              />
              <Route
                path="/owner/ownerpage"
                element={<OwnerPage OWNrole={OWNrole} />}
              />
              <Route
                path="/owner/add-category"
                element={<AddCategory OWNrole={OWNrole} />}
              />
              <Route
                path="/owner/add-items"
                element={<AddItem OWNrole={OWNrole} />}
              />
              <Route
                path="/owner/total-order"
                element={<TotalOrders OWNrole={OWNrole} />}
              />
              <Route
                path="/faculty/item-page"
                element={<ItemPage FACrole={FACrole} />}
              />
              <Route
                path="/faculty/myorders"
                element={<MyOrders FACrole={FACrole} />}
              />
            </Routes>
          </Router>
        </RoleContext.Provider>
      </CartProvider>
    </div>
  );
}

export default App;
