import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router"; 
import Homepage from "./pages/home.page";
import Blog from "./pages/Blog.page";
import Tutorial from "./pages/Tutorials.page";
import Workout from "./pages/Workout.page";
import Challenge from "./pages/Challenge.page";
import Contact from "./pages/Contact";
import SignIn from "./pages/Sign.page";
import SignUp from "./pages/SignUp";
import MainLayout from "./Layout/main.layout";
import RootLayout from "./Layout/root-layout.layout";
import DashBoard from "./pages/DashBoard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route element={<RootLayout />}>
        <Route element={<MainLayout />}>
         <Route path="/" element={<Homepage />} />
         <Route path="/Blog" element={<Blog />} />
        {/*<Route element={<ProtectedLayout />}>*/} 
            <Route path="/dashboard" element={<DashBoard />} />
           < Route path="/tutorials" element={<Tutorial />} />
            <Route path="/workout" element={<Workout/>} />
            <Route path="/challenges" element={<Challenge/>} />
            <Route path="/contact" element={<Contact/>}/>
           </Route>
         </Route> 
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
