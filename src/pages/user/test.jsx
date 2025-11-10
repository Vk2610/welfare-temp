import React from "react";
import { useState } from "react";
import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";

export default function Test() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  return (
    <>
      <Topbar toggleDrawer={toggleDrawer}/>
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}
