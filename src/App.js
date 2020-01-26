import React, { Component } from 'react';
import './App.css';
import { Card } from './components'
import animals from './assets/animal_names.json'

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

  render() {
    const shownAnmials = this.getAnimals();
    return (
      <div className='App'>
        {
          shownAnmials.map(animal => (
            <Card searchTerm={animal} />
          ))
        }
      </div>
    );
  }
}

export default App;
