import { useMemo } from 'react';

import { useAppDispatch, useAppSelector } from '../hook';
import { RootState } from '../store/store';
import { askQuestion } from '../gameSlice';

// Components
import { Container } from '../UI';

import style from './questions.module.css';

interface OwnProps {
  categoryTitle: string;
}

interface QuestionBoxProps {
  categoryTitle: string;
  qIndex: number;
}
const QuestionBox = ({ categoryTitle, qIndex }: QuestionBoxProps) => {
  const question = useAppSelector((state: RootState) => state.game.game.categories[categoryTitle].questions[qIndex]);
  const multiplier = useAppSelector((state: RootState) => state.game.multiplier);

  const dispatch = useAppDispatch();

  const amount = useMemo(() => {
    return question.asked ? "" : `$${(qIndex + 1) * multiplier}`;
  }, [question, multiplier]);
  const onClickHandler = () => {
    if (!question.asked) {
      dispatch(askQuestion({ categoryTitle, questionIndex: qIndex }));
    }
  }
  const style_key = `question-box-color-${qIndex + 1}`;
  return <div className={`${style['question-box']} ${style[style_key]}`} onClick={onClickHandler}>{amount}</div>
};


export const CategoryColumn = ({ categoryTitle }: OwnProps) => {
  const category = useAppSelector((state: RootState) => state.game.game.categories[categoryTitle]);

  const renderQuestionBoxes = () => {
    return category.questions.map((_, i) => (
      <QuestionBox
        categoryTitle={categoryTitle}
        key={i}
        qIndex={i}
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
