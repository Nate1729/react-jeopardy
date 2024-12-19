import { Game, Category } from "../models";
import { initializeCategory } from "../helpers";

const GAME_CHANGERS: Category = initializeCategory(
  "Game Changers", [
  "It wasn’t the easiest way to spread ideas, but it sure made copying books a lot easier.",
  "Once colonies were settled in the Americas, goods, ideas, and people began traveling between the Old and New Worlds. What do we call this trade?",
  "King John’s nobles didn’t want him to abuse his power. This document says kings are not above the law and sets the stage for later governments.",
  "This invention helped sailors measure angles between stars and the horizon to help determine latitude and time.",
  "Copernicus published his heliocentric theory in 1543. What does his theory say?"
]);

const TREND_SETTERS: Category = initializeCategory(
  "Trend Setters", [
  "The Original Rizzler? He started the Church of England so he could leave his first wife, then marry 5 more times!",
  "Get a load of this guy… He started the Protestant Reformation",
  "Painter, Inventor, and very curious about the human body. He was a true Renaissance Man.",
  "She and her husband sponsored Christopher Columbus’s voyages to the New World.",
  "After her father became a Protestant, this English Queen made it her bloody mission to bring Catholicism back to England."
]);

const THE_OLD_WORLD: Category = initializeCategory(
  "The Old World", [
  "When Europeans went exploring, they had four major motivators. Name them!",
  "He wanted Portugal to be the top place for sailors, ship builders, and map makers to live and work. Makes sense, since it was his country to rule…",
  "This was the pyramid social structure that ruled medieval Europe.",
  "This idea challenged the belief that God controlled every aspect of life. Instead, people had some control over their own futures and greatness!",
  "His exploration of Asia and the Silk Road encouraged Europeans to venture out in the first place!"
]);

const THE_NEW_WORLD: Category = initializeCategory(
  "The New World", [
  "They are soldier–explorers.",
  "Name the European countries that settled colonies in the New World.",
  "This crop was so labor intensive, the Europeans began bringing African slaves to the Caribbean to harvest it.",
  "In their new colonies, the French were most focused on this type of trade.",
  "The Aztecs trusted Cortes when he and the Spanish first arrived in Tenochtitlan. Who did the Aztecs think Cortes was?"
]);

const LOCAL_TRIVIA: Category = initializeCategory(
  "Local Trivia", [
  "What is McCourt’s address?",
  "What is the mascot of the University of Rhode Island?",
  "Who is Rhode Island’s current governor?",
  "Who founded Rhode Island as an English Colony for non-Puritans?",
  "What is the full official name of our state?"
]);

export const GAME: Game = {
  categories: {
    [GAME_CHANGERS.title]: GAME_CHANGERS,
    [TREND_SETTERS.title]: TREND_SETTERS,
    [THE_OLD_WORLD.title]: THE_OLD_WORLD,
    [THE_NEW_WORLD.title]: THE_NEW_WORLD,
    [LOCAL_TRIVIA.title]: LOCAL_TRIVIA,
  },
  categoryKeyOrder: [
    GAME_CHANGERS.title,
    TREND_SETTERS.title,
    THE_OLD_WORLD.title,
    THE_NEW_WORLD.title,
    LOCAL_TRIVIA.title,
  ]
}
