// React Imports
import React, { useState } from 'react';

// Components
import Header from './Header';
import Body from './Body';
import QCard from '../UI/QCard';

// Styling
import styles from './Board.module.css';

// Context
import QuestionContext from '../../store/QuestionContext';

const questions = [
  {
    category: "Five Themes of Geography",
    questions: [
      {
        value: 100,
        text: "The exact spot where something is on Earth",
        visible: true
      },
      {
        value: 200,
        text: "The travel of goods, people, and places",
        visible: true
      },
      {
        value: 300,
        text: "All the features of a location",
        visible: true
      },
      {
        value: 400,
        text: "Places near each other that have something in common",
        visible: true
      },
      {
        value: 500,
        text: "Name three countries in the southwestern hemisphere",
        visible: true
      }
    ]
  },
  {
    category: "Ancient Mesopotamia",
    questions: [
      {
        value: 100,
        text: "Mesopotamia's Farmland",
        visible: true
      },
      {
        value: 200,
        text: "Systems designed to water farmlands",
        visible: true
      },
      {
        value: 300,
        text: "The tax Persia required its conquered lands to pay to the empire",
        visible: true
      },
      {
        value: 400,
        text: "Emperor of Persia after Cyrus the Great, took the throne by force",
        visible: true
      },
      {
        value: 500,
        text: "The first king of Summer, an Akkandian",
        visible: true
      }
    ]
  }, 
  {
    category: "Judaism",
    questions: [
      {
        value: 100,
        text: "Father of Judaism",
        sisible: true
      },
      {
        value: 200,
        text: "The belief in only one God",
        sisible: true
      },
      {
        value: 300,
        text: "A promise, a binding agreement",
        sisible: true
      },
      {
        value: 400,
        text: "Abraham's other son",
        sisible: true
      },
      {
        value: 500,
        text: "Leaders in the Kingdom of Isreal before the kings",
        visible: true
      }
    ]
  },  
  {
    category: "Ancient Egypt",
    questions: [
      {
        value: 100,
        text: "Egyptaian kings",
        sisible: true
      },
      {
        value: 200,
        text: "Nobles, Priests, Scribes, Merchants, Slaves",
        sisible: true
      },
      { 
        value: 300,
        text: "Temples and Tombs",
        sisible: true
      },
      {
        value: 400,
        text: "Kingdom South of Egypt",
        sisible: true
      },
      {
        value: 500,
        text: "The woman pharaoh",
        visible: true
      }
    ]
  },
  {
    category: "Egyptian Gods and Goddesses",
    questions: [
      {
        value: 100,
        text: "The Sun God",
        visible: true
      },
      {
        value: 200,
        text: "Man with a Jackal Head",
        visible: true
      },
      {
        value: 300,
        text: "Egyptian God of Chaos",
        visible: true
      },
      {
        value: 400,
        text: "Egyptian God of the Nile",
        visible: true
      },
      {
        value: 500,
        text: "God of the Dead, Ruler of the Underworld",
        visible: true
      }
    ]
  },
  {
    category: "Random Knowledge",
    questions: [
      {
        value: 100,
        text: "How many staircases are in Hogwarts?",
        visible: true
      },
      {
        value: 200,
        text: "Who is Hermes's mother",
        visible: true
      },
      {
        value: 300,
        text: "Who was the 16th president of the United States",
        visible: true
      },
      {
        value: 400,
        text: "Where was Basketball invented?",
        visible: true
      },
      {
        value: 500,
        text: "Around the world I travel, but only in corners do I stay. What am I?",
        visible: true
      }
    ]
  },
];

const categories = questions.map(q => q.category);

const Board = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState({title: '', body: ''});
  
  return (
    <QuestionContext.Provider 
      value={{
        setShowModal,
        setModalText
      }}
    >
    <div className={styles.container}>
      { showModal &&
        <QCard 
          title={modalText.title}
          question={modalText.body}
          onClick={setShowModal}
        >
        </QCard>
      }
      <Header categories={categories}/>
      <Body questions={questions} />
    </div>
    </QuestionContext.Provider>
  );
};

export default Board;
