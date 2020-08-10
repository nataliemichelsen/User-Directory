import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// importing style
import "./index.css";

// must add components to render ^
ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
