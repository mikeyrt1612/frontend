import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState, ITodos } from '@store/todos/model'

export const stateSelector = (state: IRootState): IState => state.todos

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }: IState): boolean => loading,
)

export const errorMessageSelector = createSelector(
  stateSelector,
  ({ errorMessage }: IState): string | undefined => errorMessage,
)

export const todosSelector = createSelector(
  stateSelector,
  ({ todos }: IState): ITodos => todos,
)
