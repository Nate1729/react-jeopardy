import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store/store';
import { updateModalContent, closeQuestion } from '../gameSlice';

// Components
import { Container } from '../UI';

import style from './questions.module.css';

interface OwnProps {
  categoryIndex: number;
}

interface QuestionBoxProps {
  categoryIndex: number;
  questionIndex: number;
}
const QuestionBox = ({ categoryIndex, questionIndex }: QuestionBoxProps) => {
  const question = useAppSelector((state: RootState) => state.game.game.categories[categoryIndex].questions[questionIndex]);
  const multiplier = useAppSelector((state: RootState) => state.game.multiplier);

  const dispatch = useAppDispatch();
  
  const amount = useMemo(() => {
    return question === undefined ? "" : `$${(questionIndex + 1) * multiplier}`
  }, [question, questionIndex, multiplier]);
  
  console.log({amount});
  const onClickHandler = () => {
    if (question === "") {
      return;
    }

    dispatch(updateModalContent(question));
    dispatch(closeQuestion({categoryIndex, questionIndex}));

  }
  return <div className={style['question-box']} onClick={onClickHandler}>{amount}</div>
};


export const CategoryColumn = ({ categoryIndex }: OwnProps) => {
  const category = useAppSelector((state: RootState) => state.game.game.categories[categoryIndex]);

  const renderQuestionBoxes = () => {
    return category.questions.map((_, i) => (
      <QuestionBox
        categoryIndex={categoryIndex}
        questionIndex={i}
        key={i}
      />
    ))
  };

  return (
    <Container direction={'column'}>
      <div className={style["title-box"]}>{category.title}</div>
      {renderQuestionBoxes()}
    </Container>
  );
};
