import React from "react";

import "./App.css";
import Page from "./components/page.component";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Table from "./components/table.component";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </>
  );
}

export default App;