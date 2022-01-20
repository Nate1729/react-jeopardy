import { useState, useContext } from 'react';

import styles from './Tile.module.css';

import QuestionContext from '../../store/QuestionContext';

const Tile = props => {
  const [visible, setVisible] = useState(true);
  const ctx = useContext(QuestionContext);

  const tileClickHandler = () => {
    if (visible) {
      ctx.setShowModal(true);
      ctx.setModalText(
        {
          title: `${props.category} - ${props.children}`,
          body: props.qText
        }
      );
    }
    setVisible(false);
  };

  return (
    <button
      className={styles.button}
      onClick={tileClickHandler}
    >
      { visible && props.children}
    </button>
  );
};

export default Tile;
