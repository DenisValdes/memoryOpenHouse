import React from 'react'

import './Card.css'

const gifs = [
  "https://media.giphy.com/media/2WGYAQZ52I6wQecREk/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/SYrMAmJZT4YcU/giphy.gif",
  "http://giphygifs.s3.amazonaws.com/media/ruCg20L6H72TK/giphy.gif",
  "https://media.giphy.com/media/zsp6JrZQf3rPy/giphy.gif"
];

function shuffle(gifs) {
  gifs.sort(() => Math.random() - 0.5);
}

shuffle(gifs);

class Card extends React.Component {
  
  onClickCard = () => {
    this.props.cartaClick(this.props.carta)
  }
  
  render() {

    let carta = this.props.carta

    return (
              carta.estado === 'oculta' ?
                <div onClick={this.onClickCard} className="card-hide">
                  <figure><img src={ gifs.map( function(num) { return Math.sqrt(num)} )} /></figure>
                </div>
                :
                <div onClick={this.onClickCard} className="card-showed">
                  <img src={carta.foto} alt="" />
                  <h1>{carta.texto}</h1>
                </div>
    )
  }
}

export default Card;