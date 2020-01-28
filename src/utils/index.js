import ANIMALS from '../assets/animal_names.json'
import COLORS  from '../assets/colors.json'
const TRANSITIONS = ['card--left', 'card--right', 'card--top', 'card--bottom'];

/**
 * Chooses a random item from a collection. If an item to exclude
 * is given, ensure the new item is not that one.
 * @param {Array} collection list of items to choose from
 * @param {string|void} exclude a particular option to exclude
 * @returns {string} new item choice
 */
const getUniqueChoice = (collection, exclude) => {
  const randomElement = () => Math.floor(Math.random() * collection.length);
  let newItem = collection[randomElement()];

  if (exclude && newItem === exclude) {
    while (newItem === exclude) {
      newItem = collection[randomElement()];
    }
  }

  return newItem;
}

/**
 * Takes the ANIMALS list and chooses a number of them
 * @param {integer} size the number of animals to return
 * @returns {Array} the list of animals chosen
 */
export const getAnimals = size => {
  const initialAnimals = [];
  for(let i = 0; i < size; i++) {
    initialAnimals.push(ANIMALS[i]);
  }
  return initialAnimals;
}

/**
 * Gets a new animal
 * @param {string} exclude animal to not choose
 */
export const getAnimal = exclude => {
  return getUniqueChoice(ANIMALS, exclude);
}

/**
 * Gets a new color
 * @param {string} exclude color to not choose
 */
export const getColor = exclude => {
  return getUniqueChoice(COLORS, exclude);
}

/**
 * Gets a new transition
 * @param {string} exclude transition to not choose
 */
export const getTransition = exclude => {
  return getUniqueChoice(TRANSITIONS, exclude);
}
