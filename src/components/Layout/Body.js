import TileContainer from './TileContainer';

import styles from './Body.module.css';

const Body = props => {
  return (
    <div className={styles.body}>
      {props.questions.map(cat_obj => (
      <TileContainer key={cat_obj.category} stuff={cat_obj.questions}/>
      ))}
    </div>
  );
};

export default Body;
