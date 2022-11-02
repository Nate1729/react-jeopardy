import { useState, useContext } from 'react';

import styles from './Tile.module.css';

import QuestionContext from '../../store/QuestionContext';

import Q_100 from '../../images/100.jpg';
import Q_200 from '../../images/200.jpg';
import Q_300 from '../../images/300.jpg';
import Q_400 from '../../images/400.png';
import Q_500 from '../../images/500.jpg';


const Tile = (props) => {
  const [visible, setVisible] = useState(true);
  const ctx = useContext(QuestionContext);

  const tileClickHandler = () => {
    let body = props.qText;
    if (props.qText === 'image') {
      switch (props.children) {
        case "$100":
          body = <img src={Q_100} />;
          break;
        case "$200":
          body = <img src={Q_200} />;
          break;
        case "$300":
          body = <img src={Q_300} />;
          break;
        case "$400":
          body = <img src={Q_400} />;
          break;
        case "$500":
          body = <img src={Q_500} />;
          break;
      }
    }

    if (visible) {
      ctx.setShowModal(true);
      ctx.setModalText(
        {
          title: `${props.category} - ${props.children}`,
          body: body
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
      { visible && `${props.children}`}
    </button>
  );
};

export default Tile;
