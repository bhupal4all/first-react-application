import React from "react";
import Radium from 'radium';
import "./person.css";

const person = props => {
  const buttonStyle={
    ':hover': {
      backgroundColor: 'lightgreen',
      color: 'black'
    }
  };

  return (
    <div className="person">
      <p>
        I am <b>{props.name}</b> and age is <b>{props.age}</b>. Click Here to{" "}
      </p>

      <input type="text" value={props.name} onChange={props.changed} />
      <br />
      <button style={buttonStyle} onClick={props.onClick}>Delete Me</button>
    </div>
  );
};

export default Radium(person);
