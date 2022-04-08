import './App.css';
import React from 'react';
import ComboBox from './ComboBox';
import brazilian from './States';
import Information from './Information';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      cargo: '',
      state: '',
      house: '',
      curriculo: '',
      count: 0,
      show: false,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleMouse = this.handleMouse.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.clearAll = this.clearAll.bind(this);
  };

  handleChange({ target, currentTarget }) {
    const { name } = target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    if(value === 'on') {
      value = currentTarget.id;
      this.setState({checked: true})
    }
    this.setState({ [name]: value })
  };
  handleBlur({ target }) {
    const value = target.value;
    if (value.match(/^[0-9]/)) {
      target.value = '';
      this.setState({[target.name]: ''})
    }
  };
  handleMouse({ target }) {
    const count  = this.state.count;
    if (count === 0) {
      alert('Preencha com cuidado esta informação.')
    }
    this.setState({count: target.value})
  };

  handleClick(event) { 
    event.preventDefault();
    if(this.state.show === false || this.state.show === '') {
      this.setState({ show: true }) 
    } else {
      this.setState({ show: false }) 
    }
  };
  clearAll() {
    const keys = Object.keys(this.state);
    keys.forEach((key) => this.setState({ [key]: '' }))
  }
  changeChecked(event) {
    console.log(event.target);
  }

  render(){
  return (
    <form className='forms' >
      <h1>Forms 2.0</h1>
      <fieldset>
        <legend /> Sobre Você
      <label htmlFor='name' />Nome:
        <input id='name' name='name' type='text' placeholder='Digite Seu Nome' value={this.state.name.toUpperCase()} maxLength='40' required onChange={this.handleChange} />

        <label htmlFor='email' />Email:
        <input id='email' name='email' type='email' placeholder='Digite seu E-mail' value={this.state.email} required maxLength='50' onChange={this.handleChange} />

        <label htmlFor='cpf' />CPF:
        <input id='cpf' name='cpf' type='text' placeholder='Digite seu CPF' value={this.state.cpf} required maxLength='11' onChange={this.handleChange} />

        <label htmlFor='adress' />Endereço:
        <input id='adress' name='adress' type='text' placeholder='Digite seu Endereço' value={this.state.adress.replace(/[^a-z0-9 ]/gi,'')} required maxLength='200' onChange={this.handleChange} />

        <label htmlFor='city' />Cidade:
        <input id='city' name='city' type='text' placeholder='Digite sua Cidade' value={this.state.city} required maxLength='28' onBlur={this.handleBlur} onChange={this.handleChange} />
        <label htmlFor='state' />Estado:
        <select required id='state' onChange={this.handleChange} name='state'>
        {brazilian.states.map((state) => <ComboBox state={state} key={state} />)}
        </select>

        <label htmlFor='casa' />Casa
        <input type='radio' name='house' id='casa' onChange={this.handleChange} checked={this.state.checked} />
        <label htmlFor='apartamento' />Apartamento
        <input type='radio' name='house' id='apartamento' onChange={this.handleChange} />
        </fieldset>

        <fieldset>
        <legend />Ultimo Emprego
        <label htmlFor='curriculo' />Resumo do currículo
        <textarea maxLength='1000' value={this.state.curriculo} required id='curriculo' name='curriculo' onChange={this.handleChange} />

        <label htmlFor='cargo' />Cargo
        <textarea maxLength='40' value={this.state.cargo} required id='cargo' name='cargo' onMouseEnter={this.handleMouse} onChange={this.handleChange} />
        </fieldset>
        {/* Referência: https://stackoverflow.com/questions/33840150/onclick-doesnt-render-new-react-component */}
        <div>
        <button onClick={this.handleClick.bind(this)}>Show</button>
        <button onClick={this.clearAll.bind(this)}>Clear</button>
        {this.state.show ? <Information object={this.state} /> : null}
        </div>
    </form>
  );
  }
}
export default App;
