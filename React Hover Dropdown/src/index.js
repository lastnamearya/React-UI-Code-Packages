import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    isOpen: false
  };

  hoverMenuRef = React.createRef();

  componentDidMount() {
    document.addEventListener("click", this.handleClose);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClose);
  }

  handleOpen = () => this.setState({ isOpen: true });

  handleClose = () => this.setState({ isOpen: false });

  render() {
    return (
      <div>
        <div
          role="button"
          onMouseEnter={this.handleOpen}
          className="hover-button"
        >
          Hover Here
        </div>
        <div>
          {this.state.isOpen ? <HiddenGem close={this.handleClose} /> : null}
        </div>
      </div>
    );
  }
}

const HiddenGem = ({ close }) => (
  <div className="hidden-div" role="button" onMouseLeave={close}>
    <p>First</p>
    <p>Second</p>
    <p>Third</p>
    <p>Fourth</p>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
