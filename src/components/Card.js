import React from 'react';
import './Card.css';

function Card({ searchTerm }) {
  return (
    <div className='Card'>
      <div>{searchTerm}</div>
    </div>
  );
}

export default Card;
