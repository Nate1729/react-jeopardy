import { Game, Category } from '../models';
import { initializeCategory } from '../helpers';


const NAME_THAT_BATTLE: Category = initializeCategory(
  "Name that Battle",
  [
    "This battle was the turning point of the American Revolution, but why?",
    "Cornwallis surrendered here.",
    "The bloodiest battle in American military history, but at least the southern slaves were freed.",
    "Washington defeats the German mercenaries here.",
    "The Massachusetts 54th led the Union attack on this Confederate fort in South Carolina.",
  ],
);

const TELL_ME_WITHOUT_TELLING_ME: Category = initializeCategory(
  "Tell Me Without Telling Me",
  [
    "Tell me you're a Democratic Republican without telling me you're a Democratic Republican (Beliefs, key leaders, etc.)",
    "Tell me you're a Nativist without tellling me you're a Nativist.",
    "Tell me you're a Radical Republican without telling me you're a Radical Republican.",
    "Tell me you're a Robber Baron without telling me you're a Robber Baron",
    "Tell me you like the National Bank without telling me you like the National Bank.",
  ],
);

const INFLUENTIAL_PEOPLE: Category = initializeCategory(
  "Influential People",
  [
    "I am the \"Great Compromiser.\" My greatest accomplishments include the Compromises of 1820 and 1850.",
    "I was the first Supreme Court judge, deciding cases like Marbury v. Madison.",
    "My reinforcements drove the British out of Boston on March 17th 1776.",
    "I wrote Uncle Tom's Cabin, which described the tragic life of slaves and caused many Northerners to question the morality of slavery.",
    "I am the monopoly man, funding big businesses and financial investments for my own profit.",
  ],
);

const MAJOR_COURT_CASES: Category = initializeCategory(
  "Major Court Cases",
  [
    "Explain the checks and balances established by our Consitution for each branch of government.",
    "Explain Worcester v. Georgia",
    "Explain Marbury v. Madison",
    "Explain Dred Scott v. Sandford",
    "Explain Plessy v. Ferguson",
  ],
);

const WHO_SAID_WHAT_WHEN: Category = initializeCategory(
  "Who Said What When",
  [
    "\"We hold these truths to be self-evident, that all men are created equal\"",
    "\"all persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free\"",
    "\"John Marshall made his decision, now let him enforce it.\"",
    "\"But the reason of my return was, that the Spirit appeared to me and said I had my wishes directed to the things of this world, and not to the kindgdom of Heaven, and that I should return to the service of earthly master-\"For he who knoweth his Master's will, and doeth it not, shall be beaten with many stripes\"",
    "\"For the simplest and most precise idea of a bank is, a deposit of coin or other property, as a fund for circulating a credit upon it, which is to answer the purpose of money.\"",
  ],
);

const RANDOM_KNOWLEDGE: Category = initializeCategory(
  "Random Knowledge",
  [
    "There is a myth that I saved George Washington's portrait from the burning White House (it was really my slave who saved it)",
    "John Adams developed this disease from hyper stress and poor diet.",
    "Why should you not call chocolate sprinkles \"Jimmies?\"",
    "Abraham Lincoln and this guy were political enemies, but things got personal when Lincoln stole his girl.",
    "What do the stripes on the United States flag symbolized?",
  ],
);

export const GAME: Game = {
  categories: {
    [NAME_THAT_BATTLE.title]: NAME_THAT_BATTLE,
    [TELL_ME_WITHOUT_TELLING_ME.title]: TELL_ME_WITHOUT_TELLING_ME,
    [INFLUENTIAL_PEOPLE.title]: INFLUENTIAL_PEOPLE,
    [MAJOR_COURT_CASES.title]: MAJOR_COURT_CASES,
    [WHO_SAID_WHAT_WHEN.title]: WHO_SAID_WHAT_WHEN,
    [RANDOM_KNOWLEDGE.title]: RANDOM_KNOWLEDGE,
  },
  categoryKeyOrder: [
    NAME_THAT_BATTLE.title,
    TELL_ME_WITHOUT_TELLING_ME.title,
    INFLUENTIAL_PEOPLE.title,
    MAJOR_COURT_CASES.title,
    WHO_SAID_WHAT_WHEN.title,
    RANDOM_KNOWLEDGE.title,
  ]
}
