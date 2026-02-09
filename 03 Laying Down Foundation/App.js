import React from "react";
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
