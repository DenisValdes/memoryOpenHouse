import React from 'react'

import './Card.css'

class Card extends React.Component {
  
  onClickCard = () => {
    this.props.cartaClick(this.props.carta)
  }
  
  render() {

    let carta = this.props.carta

    return (
              carta.estado === 'oculta' ?
                <div onClick={this.onClickCard} className="card-hide"></div>
                :
                <div onClick={this.onClickCard} className="card-showed">
                  <img src={carta.foto} alt={carta.texto} />
                  <h5>{carta.texto}</h5>
                </div>
    )
  }
}

export default Card;