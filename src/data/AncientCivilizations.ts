import { Game, Category } from "../models";
import { initializeCategory } from "../helpers";

const LOCATION_LOCATION_LOCATION: Category = initializeCategory(
  "Location, Location, Location!", [
  "These two ancient civilizations were located in Central America",
  "This mountain range was home to the Inca Empire",
  "On what lake did the Aztecs settle their capital city?",
  "Name the peninsula that was home to the Maya",
  "Describe the legend that led the Aztec to settle on the island in Lake Texcoco."
]);

const ANCIENT_CITIES: Category = initializeCategory(
  "Ancient Cities", [
  "What was the capital city of the Inca Empire",
  "What was the largest Mayan city?",
  "Spell the Aztec capital city",
  "Famous pyramid ruins of the Maya can be found here",
  "In what year was Machu Picchu rediscovered by Yale Professor Hiram Bingham?"
]);

const FAMOUS_PEOPLE: Category = initializeCategory(
  "Famous People", [
  "I conquered the Aztecs",
  "I conquered the Inca",
  "I am the Aztec emperor who died when the Spanish took me prisoner",
  "I am the Aztec god that looks like Cortes, with feathers and a beard",
  "I am the King of Spain who sent conquistadors to the new world"
]);

const MAJOR_ACHIEVEMENTS: Category = initializeCategory(
  "Major Achievments", [
  "We created the most accurate calendar of the ancient world",
  "What was the Aztec name for their “floating gardens?",
  "The Maya used these to represent sounds in writing",
  "Name the record keeping system of the Inca, used instead of written language",
  "These water bridges were used by the Inca to help with farming"
]);

const ANCIENT_ENEMIES: Category = initializeCategory(
  "Ancient Enemies", [
  "What was the main purpose of Aztec warfare?",
  "Name one reason why the Maya may have disappeared",
  "Cortes didn’t know this would be his greatest weapon against the Aztecs",
  "The Inca had never seen these two things, which helped Pizarro capture Cuzco with ease",
  "What tribe was the greatest enemy of the Aztecs?"
]);

const RANDOM_TRIVIA: Category = initializeCategory(
  "Random Trivia", [
  "How many players do you need for a baseball team?",
  "What type of bender is Azula",
  "What do you call a baby kangaroo?",
  "What particles make up an atom?",
  "Two in a corner, one in a room, zero in a house, but one in a shelter. What am I?"
]
);

export const GAME: Game = {
  categories: {
    [LOCATION_LOCATION_LOCATION.title]: LOCATION_LOCATION_LOCATION,
    [ANCIENT_CITIES.title]: ANCIENT_CITIES,
    [FAMOUS_PEOPLE.title]: FAMOUS_PEOPLE,
    [MAJOR_ACHIEVEMENTS.title]: MAJOR_ACHIEVEMENTS,
    [ANCIENT_ENEMIES.title]: ANCIENT_ENEMIES,
    [RANDOM_TRIVIA.title]: RANDOM_TRIVIA,
  },
  categoryKeyOrder: [
    LOCATION_LOCATION_LOCATION.title,
    ANCIENT_CITIES.title,
    FAMOUS_PEOPLE.title,
    MAJOR_ACHIEVEMENTS.title,
    ANCIENT_ENEMIES.title,
    RANDOM_TRIVIA.title,
  ]
}
