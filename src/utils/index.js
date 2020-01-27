import ANIMALS from '../assets/animal_names.json'
import COLORS  from '../assets/colors.json'
const TRANSITIONS = ['card--left', 'card--right', 'card--top', 'card--bottom'];

const getUniqueChoice = (collection, exclude) => {
  if (exclude) {
    let newItem = collection[Math.floor(Math.random() * collection.length)];
    while (newItem === exclude) {
      newItem = collection[Math.floor(Math.random() * collection.length)];
    }
    return newItem;
  }
  return collection[Math.floor(Math.random() * collection.length)]
}

export const getAnimals = size => {
  const initialAnimals = [];
  for(let i = 0; i < size; i++) {
    initialAnimals.push(ANIMALS[i]);
  }
  return initialAnimals;
}

export const getAnimal = exclude => {
  return getUniqueChoice(ANIMALS, exclude);
}

export const getColor = exclude => {
  return getUniqueChoice(COLORS, exclude);
}

export const getTransition = exclude => {
  return getUniqueChoice(TRANSITIONS, exclude);
}
