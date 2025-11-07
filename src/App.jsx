import React from "react";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleDrawer = (open) => {
    setSidebarOpen(!open);
  };

  return (
    <>
      <Topbar />
      <Sidebar open={sidebarOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default App;
