import React, { Component } from 'react';
import './App.css';
import { Card } from './components'
import animals from './assets/animal_names.json'
import colors  from './assets/colors.json'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1
    }
  }

  getAnimals() {
    const shownAnimals = [];
    for(let i = 0; i < this.state.size; i++) {
      shownAnimals.push(animals[i]);
    }
    return shownAnimals;
  }

  getColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  render() {
    const shownAnmials = this.getAnimals();
    const color = this.getColor();

    return (
      <div className='App'>
        {
          shownAnmials.map(animal => (
            <Card key={animal} searchTerm={animal} color={color} />
          ))
        }
      </div>
    );
  }
}

export default App;
