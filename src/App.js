import React from "react";
import Header from "./Components/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Listing from "./Components/Listing";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Nftdetail from "./Components/Nftdetail";

const App = () => {
  return (
    <div className="manager">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Listing />} />
          <Route path="/nftdetails/:id" element={<Nftdetail />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
