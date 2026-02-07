// creating element is core thing of react
const h1 = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!",
);

// creating root and rendering something inside is job of ReactDOM
const root = ReactDOM.createRoot(document.querySelector("#root"));

// react element is JS Object
console.log(h1);

// root.render(h1);

//render() tells React to reconcile the React element tree and update the real DOM accordingly.

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I created nested element"),
    React.createElement("h1", { id: "heading2" }, "This is Heading 2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "newHeading" }, "This is new Heading"),
    React.createElement("h2", { id: "newH2" }, "This is heading 2"),
  ]),
]);

console.log(parent);
root.render(parent);
