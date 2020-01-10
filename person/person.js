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

  const personStyle = {
    '@media (min-width: 500px)': {
      width: '450px',
    }
  };

  return (
    <div className="person" style={personStyle}>
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
