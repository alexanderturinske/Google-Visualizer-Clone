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

  render() {
    return (
      <div className='App'>
        {
          animals.map(animal => (
            <Card searchTerm={animal} />
          ))
        }
      </div>
    );
  }
}

export default App;
