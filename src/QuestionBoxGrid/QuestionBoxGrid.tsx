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
  const categories = useAppSelector((state: RootState) => state.game.game.categories);

  return (
    <Container direction='row'>
      {categories.map((_, i) => <CategoryColumn categoryIndex={i} key={i} />)}
    </Container>
  );
};
