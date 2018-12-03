import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { createStructuredSelector } from 'reselect'

import { IRootState } from '@store/model'
import { signout } from '@store/auth/actions'
import NavBar, { IStateProps, IDispatchProps } from '@components/organisms/NavBar'
import { profileImageSelector } from '@store/user/selectors'

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  profileImage: profileImageSelector,
})

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  signout: () => { dispatch(signout()) },
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavBar))
