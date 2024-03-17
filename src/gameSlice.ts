import { ReactNode } from 'react';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Game } from './models';

import { GAME } from './data/AncientCivilizations';

interface GameState {
  game: Game;
  multiplier: number;
  modalContent?: ReactNode;
}

const initialState: GameState = {
  game: GAME,
  multiplier: 200
}

interface CloseQuestionPayload {
  categoryTitle: string;
  questionIndex: number,
}
export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    askQuestion: (state, action: PayloadAction<CloseQuestionPayload>) => {
      state.game.categories[action.payload.categoryTitle].questions[action.payload.questionIndex].asked = true;
      state.modalContent = state.game.categories[action.payload.categoryTitle].questions[action.payload.questionIndex].question;
    },
    updateModalContent: (state, action: PayloadAction<ReactNode | undefined>) => {
      state.modalContent = action.payload;
    },
  },
});

export const { askQuestion, updateModalContent } = gameSlice.actions;
export default gameSlice.reducer;
