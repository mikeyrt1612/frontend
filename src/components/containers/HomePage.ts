import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getFriendsRequest } from '@store/friends/actions'
import { getUserRequest } from '@store/user/actions'
import HomePage, { IDispatchProps } from '@components/pages/HomePage'

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  refreshData: () => {
    dispatch(getFriendsRequest())
    dispatch(getUserRequest())
  },
})

export default connect(undefined, mapDispatchToProps)(HomePage)
