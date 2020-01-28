import React, { Component } from 'react';
import './Card.css';
import { getAnimal, getColor, getTransition } from '../utils';
import PropTypes from 'prop-types';

/**
 * Card Component
 */
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

  /**
   * Starts the typing by updating the state on a set interval of 1s
   */
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

  /**
   * Clears the card after a random time between 0s and 5s
   * @param {string} interval id of the setInterval for typing
   */
  clearCard(interval) {
    const { typingComplete } = this;
    return function() {
      clearInterval(interval);
      setTimeout(() => {
        typingComplete();
      }, Math.random() * 5000);
    }
  }

  /**
   * Sets the state once the typing of the word is complete
   */
  typingComplete = () => {
    this.setState({
      current: '',
      isFrontShowing: !this.state.isFrontShowing,
      search: getAnimal(this.state.search),
      transition: getTransition(this.state.transition),
    })
  }

  /**
   * Get the necessary class for the card requesting
   * @param {Object} param0 contains isFront, a boolean on whether this is the front card
   * @returns {string} css class based on whether it should be hidden or have a transition
   */
  isFrontShowing({ isFrontCard }) {
    const { isFrontShowing, transition } = this.state;
    if (isFrontCard) {
      return isFrontShowing ? 'card--hidden' : transition;
    } else {
      return isFrontShowing ? transition : 'card--hidden';
    }
  }
  render() {
    const frontCardClass = `card__front ${this.isFrontShowing({ isFrontCard: true })} card--${this.state.frontColor}`;
    const backCardClass = `card__back ${this.isFrontShowing({ isFrontCard: false })} card--${this.state.backColor}`;

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

Card.propTypes = {
  /* Initial term to type out */
  searchTerm: PropTypes.string,
}

export default Card;
