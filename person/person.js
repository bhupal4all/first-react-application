import React from "react";
import "./person.css";

const person = props => {
  return (
    <div className="person">
      <p>
        I am <b>{props.name}</b> and age is <b>{props.age}</b>. Click Here to{" "}
      </p>

      <input type="text" value={props.name} onChange={props.changed} />
      <br />
      <button onClick={props.onClick}>Delete Me</button>
    </div>
  );
};

export default person;
