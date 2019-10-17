import React from 'react';
import './App.css';
import { getCards } from "./api/arrayCartas"

import Card from './components/Card'

class App extends React.Component {

  state = {
    cartas: null
  }

  componentDidMount() {

    getCards().then((response) => {
        this.setState( () => {
        return { cartas: response }
        })
    })

    this.traerCartas();
  }

  traerCartas = () => {

    fetch(myPromise)
      .then((response) => response.json())
      .then((response) => {

        if (response.data) {
            this.setState( () => {
                return { cartas: response.data }
            })
        }
      })
      .catch((error) => {
        console.log('Se ha producido un error');
        console.log(error);
      })
  }

  render() {
    return (
      <div className="app">
        <div className='container'>
          <div className='row'>
            {this.state.cartas ?
              this.state.cartas.map((cartas) => {
                console.log(cartas)
                return (
                  <Card cartas = {cartas} ></Card>
                )
              }) : <h2>No hay datos disponibles</h2>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
