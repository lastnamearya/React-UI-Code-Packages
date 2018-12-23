import React from "react";

// Class Component

class View extends React.Component {
  render() {
    // Always use Object Destructuring while creating reference of props
    const { changeView } = this.props;
    return (
      <div>
        <h1>View</h1>
        <p>This is View Component</p>
        <button onClick={() => changeView(false)}>Change View</button>
      </div>
    );
  }
}

export default View;
