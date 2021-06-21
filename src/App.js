import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      sexoMasculino: false,
      sexoFeminino: false
    };

    // Se a função handleInput não for uma arrow function precisará deste bind.
    // this.handleInput = this.handleInput.bind(this);

  }

  handleInput = (event) => {
    // return this.setState({ name: event.target.value });
    const { target } = event;
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    return this.setState({ [name]: value });

  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <p>
          Bind de inputs dinamicos com React JS !!!
        </p>
        <div>
          <label htmlFor="name">Nome: </label>
          <input type="text" name="name" id="idname" onChange={this.handleInput} />
          <br />
          <label htmlFor="age">Idade: </label>
          <input type="number" name="age" id="idage" onChange={this.handleInput} />
          <br />
          Sexo: <br />
          <input type="checkbox" name="sexoMasculino" id="idsexoMasculino" onChange={this.handleInput} />Maculino <br />
          <input type="checkbox" name="sexoFeminino" id="idsexoFeminino" onChange={this.handleInput} />Feminino
        </div>
      </div>
    );

  }
}

export default App;
