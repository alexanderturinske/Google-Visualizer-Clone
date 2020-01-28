import React, { Component } from 'react';
import './App.css';
import { getAnimals } from './utils'
import { AnimatedCard } from './components'

/**
 * Root React Component for the Application
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 25,
    }
  }

  render() {
    const initalAnimals = getAnimals(this.state.size);

    return (
      <div className='App'>
        <button className='card-size'></button>
        {
          initalAnimals.map(animal => (
            <AnimatedCard
              key={animal}
              searchTerm={animal}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
