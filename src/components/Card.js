import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.getColor(),
      current: '',
      search: this.props.getAnimal(),
    }
  }

  componentDidMount() {
    this.startTyping();
  }

  componentDidUpdate() {
    if (!this.state.current) {
      this.startTyping();
    }
  }

  getNewColor() {
    const { getColor } = this.props;
    const oldColor = this.state.color;
    let newColor = getColor();

    while (oldColor === newColor) {
      newColor = getColor();
    }

    return newColor;
  }

  startTyping() {
    const interval = setInterval(() => {
      const currentLength = this.state.current.length;
      const searchTermLength = this.state.search.length;
      if (currentLength === searchTermLength) {
        clearCard();
      }
      // take the length of the current value, add one, and grab the first n characters
      // from the search term
      this.setState({ current: this.state.search.substring(0, this.state.current.length + 1) })
    }, 1000);

    const clearCard = this.clearCard(interval);
  }

  clearCard(interval) {
    const { typingComplete } = this;
    return function() {
      clearInterval(interval);
      setTimeout(() => {
        typingComplete();
      }, Math.random() * 5000);
    }
  }

  typingComplete = () => {
    this.setState({ search: this.props.getAnimal(), current: '', color: this.getNewColor() })
  }

  render() {
    return (
      <div className={`card card--${this.state.color}`}>
        <div className="card__input">
          {this.state.current}
        </div>
        <span className="blinking-cursor">|</span>
      </div>
    );
  }
}

export default Card;
