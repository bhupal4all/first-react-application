import React from "react";
import './person.css'

const person = props => {
  return (
    <div className="person">
      <p>
        I am <b>{props.name}</b> and age is <b>{props.age}</b>. Click Here to{" "}
        <button onClick={props.click}>change</button>
      </p>

      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
