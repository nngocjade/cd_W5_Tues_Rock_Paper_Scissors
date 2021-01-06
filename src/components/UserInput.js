import React from "react";

const UserInput = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" value={props.userName} onChange={props.changed} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
