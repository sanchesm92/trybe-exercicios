import './App.css';
import React from 'react';


class App extends React.Component {
  constructor(){
    super()
    this.button1 = this.button1.bind(this);
    this.button2 = this.button2.bind(this);
    this.button3 = this.button3.bind(this);
    this.colorBtn = this.colorBtn.bind(this);
    this.state = {
      btn1: 0,
      btn2: 0,
      btn3: 0
    }
  }
  button1() {
    this.setState((estadoAnterior, _props) => ({
      btn1: estadoAnterior.btn1 +1
    }))
    console.log(`Botao 1 : ${this.colorBtn((this.state.btn1) -1)}`);
  }
  button2() {
    this.setState((estadoAnterior, _props) => ({
      btn2: estadoAnterior.btn2 +1
    }))
    console.log(`Botao 2 : ${this.colorBtn((this.state.btn2) -1)}`);
  }
  button3() {
    this.setState((estadoAnterior, _props) => ({
      btn3: estadoAnterior.btn3 +1
    }))
    console.log(`Botao 3 : ${this.colorBtn((this.state.btn3) -1)}`);
  }
  colorBtn(num) {
    const answer = (num % 2 === 0) ? 'green' : 'white';
    return answer
  }
  render() {
    return (
      <div>
        <button onClick={this.button1} style={{ backgroundColor:this.colorBtn(this.state.btn1) }}>{this.state.btn1}</button>
        <button onClick={this.button2} style={{ backgroundColor:this.colorBtn(this.state.btn2) }}>{this.state.btn2}</button>
        <button onClick={this.button3} style={{ backgroundColor:this.colorBtn(this.state.btn3) }}>{this.state.btn3}</button>
      </div>
    );
  }
}

export default App;
