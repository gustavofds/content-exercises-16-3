import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      nome: "",
      email: "",
      cpf: "",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
    [name]: value,
    }); 
  }
  
  render() {
    return (
      <fieldset>
        <label>Nome:
              <input value={ this.state.name } onChange={ this.handleChange } name="name" type="text" maxLength="40" required />
        </label>
        <label>E-mail:
              <input value={ this.state.email } name="email" type="email" maxLength="50" required />
        </label>
        <label>CPF:
              <input value={ this.state.cpf } name="cpf" type="number" maxLength="11" required />
        </label>
        <button type="button" onClick="">
          OK
        </button>
        <button type="button" onClick="">
          LIMPAR
        </button>
      </fieldset>           
    );
  }
}

export default Form;