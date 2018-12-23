import React from "react";

const Edit = props => (
  <div>
    <h1>Edit</h1>
    <p>This is Edit Component</p>
    <button onClick={() => props.changeView(true)}>Change View</button>
  </div>
);

export default Edit;
