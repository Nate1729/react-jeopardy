import Card from './Card';

import styles from './QCard.module.css';

const QCard = props => {
  return (
    <>
      <div onClick={() => props.onClick(false)} className={styles.backdrop}/>
      <Card onClick={props.onClick} className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p classname={styles.paragraph}>{props.children}</p>
        </div>
      </Card>
    </>
  );
};

export default QCard;
