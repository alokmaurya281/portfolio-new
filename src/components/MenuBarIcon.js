import React from "react";
export default function MenuBarIcon(props) {

  return (
    <div className="bar-btn" onClick={props.click}>
      <p className="bar w-100"></p>
      <p className="bar w-75"></p>
      <p className="bar w-50"></p>
    </div>
  );
}
