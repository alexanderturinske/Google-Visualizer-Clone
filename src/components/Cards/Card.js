import React from 'react';
import PropTypes from 'prop-types';

/**
 * A card that will show a string and have a blinking cursor
 */
const Card = ({ cardClass, display }) => (
  <div className={cardClass}>
    <div className="card__input">
      {display}
    </div>
    <span className="blinking-cursor">|</span>
  </div>
);

Card.propTypes = {
  /* the class to give the card */
  cardClass: PropTypes.string,
  /* the displayed string */
  display: PropTypes.string,
}

export default Card;