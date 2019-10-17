import React from 'react'
import PropTypes from 'prop-types'

import SocialNetworks from './SocialNetworks'
import Spinner from './Spinner'

import './Card.css'

class Card extends React.Component {

  /* Definimos las props estáticas porque nos sirve para saber qué propiedades va a utilizar el componente
  y así poder hacer un control si no ponemos estas propiedades.
  En este caso si no tenemos la imagen, el nombre y el título entonces el componente se va a ver mal, por eso 
  las hacemos requeridas */
  static props = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired
  }

  /* Definimos el valor por defecto del estado */
  state = {
    displaySpinner: false
  }

  /* Función que se ejecuta cuando hacemos click en el botón "Seleccionar" */
  onSelect = () => {
    fetch('https://app-chuck-api.herokuapp.com/urls/social-networks')
      .then((response) => response.json())
      .then((serverObject) => {

        if (serverObject.data) {

          this.setState(() => ({
            redesSocialesData: serverObject.data
          }))
        }
      })
      .catch((error) => {
        console.log('Se ha producido un error');
        console.log(error);
      })

    this.setState(() => ({ displaySpinner: !this.state.displaySpinner }))

    setTimeout(() => {
      this.setState(() => ({ displaySpinner: !this.state.displaySpinner }))
    }, 2000)

  }

  render() {
    return (
      <div className='col-4'>

        <div className='row justify-content-center'>
          <div className='col-11 card-container'>

            <div className='row justify-content-center my-3'>
              <div className='col-8'>
                <img className='img-fluid img-card' src={this.props.img} alt={'Foto Tarjeta'} />
              </div>
            </div>

            <div className='text-center px-2'>
              <h1>{this.props.nombre}</h1>
              <h3>{this.props.titulo}</h3>
            </div>

            <div className='text-center py-3'>
              <button onClick={this.onSelect}>Seleccionar</button>
            </div>
            <div className='social_networks_content'>
              {this.state.redesSocialesData ?
                this.state.redesSocialesData.map((redSocial) => {
                  return (
                      <SocialNetworks url={redSocial.url} icono={redSocial.icono} nombre={redSocial.nombre}></SocialNetworks>
                  )
                }) : <h2></h2>}
            </div>
            <div className='spinner-container'>
              {
                /* Si displaySpinner es true, entonces mostramos el spinner, sino no mostramos nada */
                this.state.displaySpinner ?
                  <Spinner></Spinner> : ''
              }
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default Card;