import "../css/popup.css";
import React from "react";
import { render } from "react-dom";
import Greeting from "./popup/send_url_button.jsx";

render(
  <Greeting/>,
  window.document.getElementById("app-container")
);
