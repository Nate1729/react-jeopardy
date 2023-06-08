import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store/store';
import { updateModalContent } from '../gameSlice';
import styles from './questionModal.module.css';

export const QuestionModal = () => {
  const content = useAppSelector((state: RootState) => state.game.modalContent);
  const dispatch = useAppDispatch();
  
  const onClickHandler = () => {
    dispatch(updateModalContent(undefined));
  };


  if (content === undefined) {
    return null;
  }

  return (
    <>
      <div onClick={onClickHandler} className={styles.backdrop}/>
      <div className={styles.modal}>
        {content}
      </div>
    </>
  );
};
