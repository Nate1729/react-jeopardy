// Components
import Tile from '../UI/Tile';

// Styling
import styles from './Header.module.css';


const Header = props => {
  return (
    <div className={styles.header}>
      {props.categories.map(cat => (
      <Tile key={cat}>{cat}</Tile>
        )
      )}
    </div>
  );   
};

export default Header;
