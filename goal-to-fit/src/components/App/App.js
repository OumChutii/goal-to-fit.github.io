import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivityReport from '../Pages/ActivityReport';
import Login from '../Pages/Login';
import Signup from '../Pages/Signup';
import ActivitySelection from '../Pages/ActivitySelection';
import UserForm from '../Pages/UserForm';
import './App.css';



function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="Login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile" element={<UserForm />} />
        <Route path="activity-report" element={<ActivityReport />} />       
        <Route path="ativity-selection" element={<ActivitySelection />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
