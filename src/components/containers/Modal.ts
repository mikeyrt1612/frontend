import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { IRootState } from '@store/model'
import { isOpenSelector, modalConfigSelector } from '@store/modal/selectors'
import { closeModal } from '@store/modal/actions'
import Modal, { IStateProps, IDispatchProps } from '@components/organisms/Modal'

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  isOpen: isOpenSelector,
  config: modalConfigSelector,
})

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  closeModal: () => { dispatch(closeModal()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
