import React from 'react';
import './App.css';
import { getCartas } from './api/arrayCartas';

import Card from './Components/Card.js';

class App extends React.Component {

  state = {
    carta1: null,
    carta2: null,
    cartas: [],
    encontrada: null
  }

  componentDidMount() {
    getCartas().then((Response) => {
      this.setState(() => { return { cartas: Response } })
    });
  }

  cartaClick = (cartaElegida) => {
    let carta1 = this.state.carta1;
    let carta2 = this.state.carta2;

    if (cartaElegida.estado === 'oculta') {

      cartaElegida.estado = 'jugando'

      if (carta1 === null) {

        this.setState(() => ({ carta1: cartaElegida }))

      } else if (carta2 === null) {

        this.setState(() => ({ carta2: cartaElegida }))

        if ( carta1.idPar === cartaElegida.idPar ) {

          this.setState(prevState => ({
            carta2: { ...prevState.carta2,  estado: 'encontrada', },
            cartas: prevState.cartas.map(
              el => el.id === carta1.id ? { ...el, estado: 'encontrada' }: el
            ),
            encontrada: true
          }))

          setTimeout(() => {
            this.setState(() => ({
              encontrada: false
            }))

          }, 1000);

        } else {

          this.setState(prevState => ({
            carta2: { ...prevState.carta2, estado: 'no-encontrada' },
            carta1: { ...prevState.carta1, estado: 'no-encontrada' },
            cartas: prevState.cartas.map(
              el => el.id === carta1.id ? { ...el, estado: 'no-encontrada' }: el
            )
          }))
        }

      } else {

        if (carta1.estado === 'no-encontrada' && carta2.estado === 'no-encontrada') {

          this.setState(prevState => ({
            cartas: prevState.cartas.map(
              el => el.id === carta1.id || el.id === carta2.id ? { ...el, estado: 'oculta' }: el
            )
          }))

        }

        this.setState(() => ({
          carta1: cartaElegida,
          carta2: null
        }))
      }
    }
  }

  render() {
    return (
      <div className="app">
        {this.state.cartas.map((carta) => {
          return (
            <Card key={carta.id} carta={carta} cartaClick={this.cartaClick}></Card>
          )
        })}
      </div>
    );
  }
}

export default App;
