import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { IRootState } from '@store/model'
import { loadingSelector, errorMessageSelector } from '@store/auth/selectors'
import { signinRequest } from '@store/auth/actions'
import LoginForm, { IStateProps, IDispatchProps } from '@components/molecules/LoginForm'

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  loading: loadingSelector,
  errorMessage: errorMessageSelector,
})

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  onSubmit: (username: string, password: string) => {
    dispatch(signinRequest({ username, password }))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
