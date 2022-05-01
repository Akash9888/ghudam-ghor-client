import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import "flowbite";
import { BrowserRouter } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const root = ReactDOM.createRoot(document.getElementById("root"));
const options = {
    // you can also just use 'bottom center'
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offset: "30px",
    // you can also just use 'scale'
    transition: transitions.SCALE,
};
root.render(
    <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </AlertProvider>
);
