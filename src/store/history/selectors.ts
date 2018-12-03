import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState, IHistory } from '@store/history/model'

export const stateSelector = (state: IRootState): IState => state.history

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }: IState): boolean => loading,
)

export const errorMessageSelector = createSelector(
  stateSelector,
  ({ errorMessage }: IState): string | undefined => errorMessage,
)

export const historySelector = createSelector(
  stateSelector,
  ({ data }: IState): IHistory => data,
)
