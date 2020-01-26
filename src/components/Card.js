import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  componentDidMount() {
    // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    this.nameInput.focus();
  }

  render() {
    const { searchTerm } = this.props;
    return (
      <div className='card'>
        <input
          className="card__input"
          ref={(input) => { this.nameInput = input; }}
          type="text"
          value={searchTerm}
        />
      </div>
    );
  }
}

export default Card;
