import React from 'react';
import { Container } from './styles';

function Pagination({prevList, nextList}) {
  return (
    <Container>
        <button className="previous" aria-label="anterior" onClick={prevList}>◀</button>
        <button className="next" aria-label="proximo" onClick={nextList}>▶</button>
    </Container>
  )
}

export default Pagination;