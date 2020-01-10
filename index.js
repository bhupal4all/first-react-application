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
      persons: [
        { id: "123", name: "Ram", age: 31 },
        { id: "124", name: "Sita", age: 29 },
        { id: "125", name: "Laxman", age: 30 }
      ]
    };
  }

  deletePersonHandler = index => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id == id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  toggleShowPersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({ showPersons: !showPersons });
  };

  render() {
    const buttonStyle = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    const classes = [];

    if (this.state.persons.length<=2){
      classes.push('red');
    }

    if (this.state.persons.length<=1){
      classes.push('bold');
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                onClick={() => this.deletePersonHandler(index)}
                changed={event => this.nameChangeHandler(event, person.id)}
                key={person.id}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );
      buttonStyle.backgroundColor = "red";
    }

    return (
      <div className="playGround">
        <h2>React Version: {React.version}</h2>

        <p className={classes.join(' ')}>We have {this.state.persons.length} Persons</p>

        <Hello name={this.state.name} />

        <button style={buttonStyle} onClick={this.toggleShowPersonsHandler}>
          Toggle Persons
        </button>

        {persons}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
