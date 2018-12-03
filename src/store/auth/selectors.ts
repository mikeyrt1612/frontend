import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState } from '@store/auth/model'

export const stateSelector = (state: IRootState): IState => state.signin

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }: IState): boolean => loading,
)

export const errorMessageSelector = createSelector(
  stateSelector,
  ({ errorMessage }: IState): string | undefined => errorMessage,
)
