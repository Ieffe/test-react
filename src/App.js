import React from 'react';
import logo from './logo.svg';
import './App.css';
import SideBar from "./components/Sidebar"
import CreateAppointment from "./components/appointment/Create"
import AppointmentList from "./components/appointment/List"
import TodayAppointment from "./components/appointment/Today"


function App() {
  return (
    <div>
      <SideBar />
      <CreateAppointment />
      <AppointmentList />
      <TodayAppointment />
    </div>
  );
}

export default App;
