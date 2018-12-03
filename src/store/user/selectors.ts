import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState, IUser } from '@store/user/model'

export const stateSelector = (state: IRootState): IState => state.user

export const loadingSelector = createSelector(
  stateSelector,
  ({ loading }: IState): boolean => loading,
)

export const errorMessageSelector = createSelector(
  stateSelector,
  ({ errorMessage }: IState): string | undefined => errorMessage,
)

export const userSelector = createSelector(
  stateSelector,
  ({ data }: IState): IUser => data,
)

export const profileImageSelector = createSelector(
  stateSelector,
  ({ data: { profileImage } }: IState): string => profileImage,
)
