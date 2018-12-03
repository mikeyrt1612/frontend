import { StateType } from 'typesafe-actions'

import reducers from '@store/reducers'

export type IRootState = StateType<typeof reducers>
