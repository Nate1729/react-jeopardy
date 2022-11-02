// React Imports
import React, { useState } from 'react';

// Components
import Header from './Header';
import Body from './Body';
import QCard from '../UI/QCard';

import { questions } from '../../constants';

// Styling
import styles from './Board.module.css';

// Context
import QuestionContext from '../../store/QuestionContext';


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
          onClick={setShowModal}
        >
          {modalText.body}
        </QCard>
      }
      <Header categories={categories}/>
      <Body questions={questions} />
    </div>
    </QuestionContext.Provider>
  );
};

export default Board;
