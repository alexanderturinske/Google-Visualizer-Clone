import animals from '../assets/animal_names.json'
import colors  from '../assets/colors.json'

export const getAnimal = exclude => {
  if (exclude) {
    let newAnimal = animals[Math.floor(Math.random() * animals.length)];
    while (newAnimal === exclude) {
      newAnimal = animals[Math.floor(Math.random() * animals.length)];
    }
    return newAnimal;
  }
  return animals[Math.floor(Math.random() * animals.length)]
}

export const getAnimals = size => {
  const initialAnimals = [];
  for(let i = 0; i < size; i++) {
    initialAnimals.push(animals[i]);
  }
  return initialAnimals;
}

export const getColor = exclude => {
  if (exclude) {
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === exclude) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    return newColor;
  }
  return colors[Math.floor(Math.random() * colors.length)]
}
