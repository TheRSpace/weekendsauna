import React from "react";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
//import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SignUp from "./components/pages/SignUp";
import About from "./components/pages/About";
import { Helmet } from "react-helmet";

const App = () => {
  return (
    <>
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Weekend Sauna</title>
          <link rel="canonical" href="https://www.weekendsauna.com/" />
          <meta name="description" content="Weekend Sauna pirts noma latvijā pasākumiem, ballītei vai atpūtai." />
        </Helmet>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
