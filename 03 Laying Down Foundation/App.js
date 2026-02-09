import React, { Component } from "react";
import ReactDOM from "react-dom/client";

/**
 * React Element (created using React.createElement)
 * Internally, this is just a plain JavaScript object
 */
const reactElement = React.createElement(
  "h1",
  { id: "react-element" },
  "This is created using React.createElement",
);

/**
 * Functional Component (written using JSX)
 */
const Title = () => (
  <h1 id="title" className="head">
    This is created using JSX (Title Component)
  </h1>
);

/**
 * React Component demonstrating:
 * - Component inside Component
 * - Element inside Component
 */
const HeadingComponent = () => (
  <div className="container">
    <Title /> {/* Component inside Component */}
    {reactElement} {/* Element inside Component */}
    <h2>This is JSX inside a Component</h2>
  </div>
);

/**
 * JSX Element demonstrating:
 * - Component inside Element
 * - Element inside Element
 */
const composedElement = (
  <section className="section">
    <Title /> {/* Component inside Element */}
    <p>
      <span>Element inside Element</span>
    </p>
  </section>
);

/**
 * Create root and render.
 * React expects a single root element, so we wrap multiple
 * elements/components inside one parent <div>.
 * (In real apps, React.Fragment <>...</> can be used to avoid extra DOM nodes.)
 */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    {composedElement}
    <HeadingComponent />
  </div>,
);

// --------------------------------------Assignments-------------------------------------------------

// Create a `Nested header Element` using `React.createElement`(h1,h2,h3 inside a div with class "title")

//   - Create the `same element using JSX`
//   - Create a `functional component of the same with JSX`
//   - `Pass attribute` into the tag in `JSX`
//   - `Composition of Component` (Add a component inside another)
//   - `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>} vs {TitleComponent()}` in JSX.

// Create a nested header using React.createElement (h1, h2, h3 inside a div with class "title")
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "Header 1"),
  React.createElement("h2", {}, "Header 2"),
  React.createElement("h3", {}, "Header 3"),
]);

// Render to check output (for learning)
root.render(header);

// Same nested header using JSX (passing attribute in JSX)
const JSXHeader = (
  <div className="title">
    <h1>Header 1 using JSX</h1>
    <h2>Header 2 using JSX</h2>
    <h3>Header 3 using JSX</h3>
  </div>
);

// Render to check JSX output (for learning)
root.render(JSXHeader);

// Functional component using JSX
const JSXHeaderComponent = () => (
  <div className="title">
    <h1>Header 1</h1>
    <h2>Header 2</h2>
    <h3>Header 3</h3>
  </div>
);

// Component composition (component inside another component)
const NewComposition = () => (
  <div className="composition">
    <JSXHeaderComponent />
    <h4>Header 4</h4>
    <h5>Header 5</h5>
    <h6>Header 6</h6>
  </div>
);

// Final render (composition)
root.render(<NewComposition />);

// JSX usage notes:
//
// If TitleComponent is a React Component (function):
//   <TitleComponent />                 -> correct way to render a component
//   <TitleComponent></TitleComponent>  -> same as self-closing, used when passing children
//   {TitleComponent}                  -> just a function reference, nothing will render
//   {TitleComponent()}                -> calls the function directly (not recommended in React)
//
// If TitleComponent is a React Element (JSX object):
//   {TitleElement}                    -> correct way to render the element
//   <TitleElement />                  -> invalid (elements are not components)
//
// NOTE: Multiple root.render() calls are used here only for learning/testing.
// Each call replaces the previous UI. In real apps, we render once.

//--------------------------------------------------------Assignment 2------------------------------------------------------------------

// - Create a `Header Component` from scratch using `Functional Component` with JSX
//   - Add a `Logo on Left`
//   - Add a `search bar in middle`
//   - Add `User icon on right`
//   - Add `CSS to make it look nice`

const HeaderComponent = () => (
  <div id="container">
    <img
      src="https://www.citypng.com/public/uploads/preview/bmw-car-logo-735811696610457s9siw7ivja.png"
      alt="logo"
      className="bmwImg"
    />
    <input id="search" type="text" placeholder="Search" aria-label="Search" />
    <img
      src="https://www.citypng.com/public/uploads/preview/bmw-car-logo-735811696610457s9siw7ivja.png"
      alt="newLogo"
      className="bmwImg"
    />
  </div>
);
root.render(<HeaderComponent />);
