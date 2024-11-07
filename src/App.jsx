import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { NavRoutes } from "./routes/NavRoutes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <NavRoutes />
      <Footer />
    </>
  );
}

export default App;
