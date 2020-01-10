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

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = event => {
    console.log(event.target);
    this.setState(
      {
        persons: [{ name: event.target.value, age: 29 }]
      },
      () => {
        console.log("Changed:", this.state);
      }
    );
  };

  toggleShowPersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                onClick={()=>this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="playGround">
        <h2>React Version: {React.version}</h2>

        <Hello name={this.state.name} />

        <button onClick={this.toggleShowPersonsHandler}>Toggle Persons</button>

        {persons}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
