import * as React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import { Products } from "../";

class Content extends React.Component {
  render() {
    return (
      <main>
        <Products />
      </main>
    );
  }
}

export default Content;
