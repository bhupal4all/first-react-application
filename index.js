import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Person from "./person/person";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Bhupal",
      showPersons: true,
      persons: [{ name: "Ram", age: 31 }, { name: "Sita", age: 29 }]
    };
  }

  switchNameHandler = newName => {
    this.setState({
      persons: [{ name: newName, age: 29 }]
    });
  };

  nameChangeHandler = event => {
    console.log(event.target);
    this.setState({
      persons: [{ name: event.target.value, age: 29 }]
    }, () => {
      console.log("Changed:", this.state);
    });
  };

  toggleShowPersonsHandler = () =>{
    this.setState({
      showPersons: !this.state.showPersons
    });
  };

  render() {

    let persons = null;

    this.persions = (
        <Person
          click={this.switchNameHandler.bind(this, "New Name")}
          changed={this.nameChangeHandler}
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
    );


    return (
      <div className='playGround'>
        <h2>React Version: {React.version}</h2>

        <Hello name={this.state.name} />

        <button onClick={this.toggleShowPersonsHandler}>
          Toggle Persons
        </button>

        {this.persions}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
