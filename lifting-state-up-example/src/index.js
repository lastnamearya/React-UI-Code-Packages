import React from "react";
import ReactDOM from "react-dom";
import Edit from "./EditComponet";
import View from "./ViewComponent";

import "./styles.css";

class App extends React.Component {
  state = {
    view: true
  };

  handleView = value => this.setState({ view: value });

  render() {
    return (
      <div>
        {this.state.view ? (
          <View changeView={this.handleView} />
        ) : (
          <Edit changeView={this.handleView} />
        )}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
