import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "divChild1", className: "parentChild" },
    [
      React.createElement(
        "h1",
        { id: "c1h1", key: "h1", className: "c1Heading" },
        "This is heading 1",
      ),
      React.createElement(
        "h2",
        { id: "c1h2", key: "h2", className: "c1Heading" },
        "This is heading 2",
      ),
    ],
  ),

  React.createElement(
    "div",
    { id: "child2", key: "divChild2", className: "parentChild" },
    [
      React.createElement(
        "h3",
        { id: "c2h3", key: "h3", className: "c2Heading" },
        "This is heading 3",
      ),
      React.createElement(
        "h4",
        { id: "c2h4", key: "h4", className: "c2Heading" },
        "This is heading 4",
      ),
    ],
  ),
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(parent);
