import { createStandardAction } from 'typesafe-actions'

import * as types from '@store/modal/actionTypes'
import { IModalConfig } from '@store/modal/model'

export const openModal = createStandardAction(types.OPEN_MODAL)<IModalConfig<any>>()

export const closeModal = createStandardAction(types.CLOSE_MODAL)()
