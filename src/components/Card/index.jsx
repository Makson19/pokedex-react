import React from 'react';
import { Container } from './styles';

function Card({item, show}) {
  return (
    <Container className={item.type[0]} showStats={show}>
        <div className="title">
            <h2>{item.name}</h2>
            <span>#{item.id}</span>
        </div>

        <img src={item.image} alt={item.name} />

        <div className="description">
            <span className="type">Tipo:</span>
            <span className="type-value">{item.type.join(', ')}</span>
            <span className="weight">Peso:</span>
            <span className="weight-value">{item.weight/10} kg</span>
            <span className="height">Altura:</span>
            <span className="height-value">{item.height/10} m</span>
        </div>
    </Container>
  )
}

export default Card;