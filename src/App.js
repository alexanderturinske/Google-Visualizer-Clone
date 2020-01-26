import React, { Component } from 'react';
import './App.css';
import { Card } from './components'
import animals from './assets/animal_names.json'
import colors  from './assets/colors.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      size: 1,
    }
  }

  getAnimals() {
    const { current, size } = this.state;
    const shownAnimals = [];
    for(let i = 0; i < size; i++) {
      shownAnimals.push(animals[current]);
    }
    return shownAnimals;
  }

  getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  typingComplete = () => {
    const { current, size } = this.state;
    this.setState({ current: current + size });
  }

  render() {
    const shownAnmials = this.getAnimals();
    const color = this.getColor();

    return (
      <div className='App'>
        <button className='card-size'></button>
        {
          shownAnmials.map(animal => (
            <Card
              key={animal}
              color={color}
              searchTerm={animal}
              typingComplete={this.typingComplete}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
