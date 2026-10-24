import React from "react";
// @ts-expect-error CSS is loaded by the bundler; TypeScript has no CSS module declaration.
import "../css/app.css";

function App() {
  return <div>HOME</div>;
}

export default App;
