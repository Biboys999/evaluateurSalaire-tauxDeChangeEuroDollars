import React, { Component } from 'react'
import './App.css'


function Situation (props){
  if(props.money >= 50000){
    return <p>Votre revenu est modeste</p>
  }
  return <p>Votre revenu est faible</p>
}


class Simulateur extends Component{
  constructor(props) {
    super(props)
      this.handleChange = this.handleChange.bind(this);
      this.state = { money: "", dollars: "$", euro: "€"}
      ;
  }

  Dollars() {
      let convertion = this.state.money
      let somme = convertion * 1.08 + "$"
      document.getElementById("monnaie_change").innerHTML = "votre revenue en dollars " + somme

      // this.setState({
      //   money: convertion * 1.08 + "$",
      // })
  }
  Euro() {
      let convertion = this.state.money
      let somme = convertion * 0.93 + "€"
      document.getElementById("monnaie_change").innerHTML = "votre revenue en Euro " + somme

      // this.setState({
      //   money: convertion * 1.08 + "$",
      // })
  }
  handleChange(e){
    this.setState({ money: e.target.value });
  }
  render(){
    const money = this.state.money
    return(
      <div>
        <fieldset className="color_white">
          <legend className="color_white">Simulateur de situation financière</legend> 
          <input value={money} onChange={this.handleChange} />
          <Situation className="color_white" money={money} />


          <button onClick={this.Euro.bind(this)}>€</button>
          <button onClick={this.Dollars.bind(this)}>$</button>
          <p id="monnaie_change"></p>

        </fieldset>
      </div>
    )
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <h2 className="color_white" >Hello Rem</h2>
        <Simulateur /> 
      </div>
    )
  }
}

export default App;