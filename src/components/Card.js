import React, { Component } from 'react';
import './Card.css';
import { getAnimal, getColor, getTransition } from '../utils';

class Card extends Component {
  constructor(props) {
    super(props);

    const frontColor = getColor();
    const transition = getTransition();
    this.state = {
      frontColor,
      backColor: getColor(frontColor),
      current: '',
      isFrontShowing: true,
      search: getAnimal(),
      transition,
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

  startTyping() {
    const interval = setInterval(() => {
      const currentLength = this.state.current.length;
      const searchTermLength = this.state.search.length;
      if (currentLength === searchTermLength) {
        clearCard();
      }

      let frontColor;
      let backColor;

      if (!this.state.isFrontShowing) {
        frontColor = this.state.frontColor;
        backColor = getColor(this.state.frontColor);
      } else {
        frontColor = getColor(this.state.backColor);
        backColor = this.state.backColor;
      }
      // take the length of the current value, add one, and grab the first n characters
      // from the search term
      this.setState({
        current: this.state.search.substring(0, this.state.current.length + 1),
        frontColor,
        backColor,
      })
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
    this.setState({
      current: '',
      isFrontShowing: !this.state.isFrontShowing,
      search: getAnimal(this.state.search),
      transition: getTransition(this.state.transition),
    })
  }

  isFrontShowing({ isFront }) {
    const { isFrontShowing, transition } = this.state;
    if (isFront) {
      return isFrontShowing ? 'card--hidden' : transition;
    } else {
      return isFrontShowing ? transition : 'card--hidden';
    }
  }
  render() {
    const frontCardClass = `card__front ${this.isFrontShowing({ isFront: true })} card--${this.state.frontColor}`
    const backCardClass = `card__back ${this.isFrontShowing({ isFront: false })} card--${this.state.backColor}`

    return (
      <div className={`card`}>
        <div className={`${frontCardClass}`}>
          <div className="card__input">
            {this.state.current}
          </div>
          <span className="blinking-cursor">|</span>
        </div>
        <div className={`${backCardClass}`}>
          <div className="card__input">
            {this.state.current}
          </div>
          <span className="blinking-cursor">|</span>
        </div>
      </div>
    );
  }
}

export default Card;
