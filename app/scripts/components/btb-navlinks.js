import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import React from "react";

class BtbNavLinks extends React.Component {
  render() {
    return (
      <nav>
        <ul className="right ">
          <li><Link to="/search">Search Bands</Link></li>
          <li><Link to="/voted">Voted Bands</Link></li>
        </ul>

      </nav>
    );
  }
}

export default BtbNavLinks;
