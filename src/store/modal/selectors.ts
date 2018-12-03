import { createSelector } from 'reselect'

import { IRootState } from '@store/model'
import { IState, IModalConfig } from '@store/modal/model'

export const stateSelector = (state: IRootState): IState => state.modal

export const isOpenSelector = createSelector(
  stateSelector,
  ({ isOpen }: IState): boolean => isOpen,
)

export const modalConfigSelector = createSelector(
  stateSelector,
  ({ config }): IModalConfig => config,
)
