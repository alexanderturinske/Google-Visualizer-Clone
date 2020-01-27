import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.getAnimal(),
    }
  }
  componentDidMount() {
    this.startTyping();
  }

  componentDidUpdate() {
    this.startTyping();
  }

  startTyping() {
    const input = this[this.props.searchTerm];
    // https://stackoverflow.com/questions/28889826/set-focus-on-input-after-render
    input.focus();

    const interval = setInterval(() => {
      const currentLength = input.value.length;
      const searchTermLength = this.state.search.length;
      if (currentLength === searchTermLength) {
        clearCard();
      }
      // take the length of the current value, add one, and grab the first n characters
      // from the search term
      input.value = this.state.search.substring(0, input.value.length + 1);
    }, 1000);

    const clearCard = this.clearCard(interval);
  }

  clearCard(interval) {
    const { typingComplete } = this;
    return function() {
      clearInterval(interval);
      setTimeout(() => {
        typingComplete();
      }, Math.random() * 2);
    }
  }

  typingComplete = () => {
    this.setState({ search: this.props.getAnimal() })
  }

  render() {
    const { getColor } = this.props;
    const color = getColor();

    return (
      <div className={`card card--${color}`}>
        <input
          className="card__input"
          ref={(input) => { this[this.props.searchTerm] = input; }}
          type="text"
          value=''
        />
      </div>
    );
  }
}

export default Card;
