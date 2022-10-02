import React, { Component } from "react";
import SlName from "./sl-name.jsx";

class ShoppingList extends Component {
  state = {
    name: "Randy",
  };
  renderName(n) {
    //console.log(n);
    return <SlName name={n} />;
  }
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.state.name}</h1>
        <div>{this.renderName("Bill")}</div>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
