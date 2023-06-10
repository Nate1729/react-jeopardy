// Components
import { Container } from '../UI';
import { CategoryColumn } from './QuestionColumn';

// Models
import { useAppSelector } from '../hook';
import { RootState } from '../store/store';

/* This renders the entire grid of question boxes based
 * on the game object that gets passed in via props
 */
export const QuestionBoxGrid = () => {
  const categoryTitles = useAppSelector((state: RootState) => state.game.game.categoryKeyOrder);

  return (
    <Container direction='row'>
      {categoryTitles.map((title, key) => <CategoryColumn categoryTitle={title} key={key} />)}
    </Container>
  );
};
