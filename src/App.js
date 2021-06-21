import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      desc: '',
      age: '',
      ativo: ''
    }
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(event) {
    const { target } = event
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value
    return this.setState({
      [name]: value
    });
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <input type="text" name="name" onChange={this.handleInput} />
            <input type="text" name="desc" onChange={this.handleInput} />
            <input type="number" name="age" onChange={this.handleInput} />
            <input type="checkbox" name="ativo" onChange={this.handleInput} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
