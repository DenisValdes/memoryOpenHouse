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
                  <img src={carta.foto} alt="" />
                  <h1>{carta.texto}</h1>
                </div>
    )
  }
}

export default Card;