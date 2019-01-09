import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    selectedValue: ""
  };

  handleChange = event => this.setState({ selectedValue: event.target.value });

  render() {
    const selected = this.state.selectedValue;
    return (
      <div>
        {selected ? <h1>{selected}</h1> : <h1>Radio Button Input</h1>}

        <div className="inputs">
          <label>
            <input
              name="touchpoint"
              type="radio"
              value="Hello"
              onChange={this.handleChange}
            />
            <p>Hello</p>
          </label>
          <label>
            <input
              name="touchpoint"
              type="radio"
              onChange={this.handleChange}
              value="There"
            />
            <p>There</p>
          </label>
        </div>
        <button onClick={() => this.setState({ selectedValue: "" })}>
          Reset
        </button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
