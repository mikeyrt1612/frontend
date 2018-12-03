import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState, IFriends } from '@store/friends/model'

export const stateSelector = (state: IRootState): IState => state.friends

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }: IState): boolean => loading,
)

export const friendsSelector = createSelector(
  stateSelector,
  ({ data }: IState): IFriends => data,
)
