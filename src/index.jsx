import React from "react";
import { createRoot } from "react-dom/client";
import './output.css';
import App from "./app";

const domNode = document.getElementById('app');
domNode.classList.add("bg-base-100", "h-screen");
const root = createRoot(domNode);


root.render(<App/>)