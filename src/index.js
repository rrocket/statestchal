import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app";
import Detail from "./detail";
import './theme.css'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="detail/:accountId" element={<Detail />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("app")
);
