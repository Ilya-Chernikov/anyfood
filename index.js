import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { veryDifficultCalculation } from "./utils/memo-function";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

// veryDifficultCalculation(12, 13); // new
// veryDifficultCalculation(12, 13); // storage
// veryDifficultCalculation(12, 13); // storage
// veryDifficultCalculation(12, 12); // new
// veryDifficultCalculation(12, 12); // storage
// veryDifficultCalculation(12, 13); // new
// veryDifficultCalculation(12, 13); // storage

root.render(<App />);

// React.createElement("div", {
//   id: "div1",
//   children: [
//     React.createElement("h1", { children: "Caramba!" }),
//     React.createElement("div", {å
//       id: "div2",
//       children: ["Rest1", "Rest2", "Rest3"].map((restaurantName) =>
//         React.createElement("div", { children: restaurantName })
//       ),
//     }),
//   ],
// });
