import React from "react";
import ReactDOM from "react-dom";
import "./src/App.css";
import App from "./src/components/App";

import { Provider } from "mobx-react";
import TodoStore from "./src/store/TodoStore";

const Root = (
  <Provider TodoStore={TodoStore}>
    <App />
  </Provider>
);

ReactDOM.render(Root, document.getElementById("root"));
