import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  componentDidMount() {
    // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    this.nameInput.focus();

    const typing = setInterval(() => {
      // take the length of the current value, add one, and grab the first n characters
      // from the search term
      this.nameInput.value = this.props.searchTerm.substring(0, this.nameInput.value.length + 1);
    }, 2000);
  }

  render() {
    const { color } = this.props;
    return (
      <div className={`card card--${color}`}>
        <input
          className="card__input"
          ref={(input) => { this.nameInput = input; }}
          type="text"
          value=''
        />
      </div>
    );
  }
}

export default Card;
