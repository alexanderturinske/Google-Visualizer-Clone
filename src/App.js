import React, { Component } from 'react';
import './App.css';
import { Card } from './components'
import animals from './assets/animal_names.json'
import colors  from './assets/colors.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 25,
    }
  }

  getAnimal = () => {
    return animals[Math.floor(Math.random() * animals.length)]
  }

  getAnimals() {
    const { current, size } = this.state;
    const shownAnimals = [];
    for(let i = 0; i < size; i++) {
      shownAnimals.push(animals[current + i]);
    }
    return shownAnimals;
  }

  getColor(exclude) {
    if (exclude) {
      let newColor = colors[Math.floor(Math.random() * colors.length)];
      while (newColor === exclude) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
      }
      return newColor;
    }
    return colors[Math.floor(Math.random() * colors.length)]
  }

  render() {
    // TODO: this is now used to create a unique
    // array of information; use some other method
    const shownAnmials = this.getAnimals();

    return (
      <div className='App'>
        <button className='card-size'></button>
        {
          shownAnmials.map(animal => (
            <Card
              key={animal}
              getColor={this.getColor}
              getAnimal={this.getAnimal}
              searchTerm={animal}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
