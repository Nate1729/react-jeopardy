import Tile from '../UI/Tile';

import styles from './TileContainer.module.css';

const TileContainer = props => {
  return (
    <div className={styles['tile-container']}>
      {props.stuff.map(q_obj => (
        <Tile 
          key={q_obj.value}
          qText={q_obj.text}
          category={props.category}
        >{`$${q_obj.value}`}</Tile>
      ))}
    </div>
  );
}

export default TileContainer;
