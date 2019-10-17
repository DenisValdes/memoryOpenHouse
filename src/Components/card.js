import React from 'react'
import PropTypes from 'prop-types'

import Card from  './Card'

import './Card.css'

class Card extends React.Component {

  static props = {
    id,
    foto,
    texto,
    idPar,
    estado
  }

  state = {
    cartaState: false
  }

  render() {
    return (
      <div class="card-hide">
        <h3>{this.}</h3>
      </div>
    )
  }
}

export default Card;