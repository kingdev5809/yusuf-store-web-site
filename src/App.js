import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Layout/HomePage/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<HomePage />} path="/" />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
