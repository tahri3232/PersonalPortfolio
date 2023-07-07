import Body from "./About";
import Contact from "./Contact";
import MySkills from "./MySkills";
import MyWork from "./MyWork";
import SideBar from "./Sidebar";
import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css'
const MainComponent=()=>{
    return (
      <>
        <div className="main">
          <BrowserRouter basename="/PersonalPortfolio">
            <SideBar />
            <Routes>
              <Route path="/contact" element={<Contact></Contact>} />
              <Route path="/skills" element={<MySkills></MySkills>} />
              <Route path="/work" element={<MyWork></MyWork>} />
              <Route path="/home" element={<Body></Body>} />
            </Routes>
          </BrowserRouter>
        </div>
      </>
    );
}

export default MainComponent;