import React from 'react';
import './App.css';
import { getCartas } from './api/arrayCartas';

import Card from './Components/Card.js';

class App extends React.Component {

  state = {
    card1: null,
    card2: null,
    cards: [],
    coincidencia: null
  }

  componentDidMount() {
    getCartas().then((Response) => {
      this.setState(() => { return { cards: Response } })
    });
  }

  cartaClick = (cartaSelect) => {
    console.log(cartaSelect)
    cartaSelect.estado = 'play'

    if (this.state.card1 === null) {
      this.setState(() => {
        return { card1: cartaSelect}
      })
    }else if (this.state.card2 === null) {
      this.setState(() => {
        return { card2: cartaSelect }
      })
    } else {
      if (this.state.card1.idPar === this.state.card2.idPar) {
        console.log('Son pares dennis')
      } else {
        console.log('No son pares dennis')
        cartaSelect.estado = 'oculta'
      }
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.cards.map((carta) => {
          return (
            <Card key={carta.id} carta={carta} cartaClick={this.cartaClick}></Card>
          )
        })}
      </div>
    );
  }
}

export default App;
