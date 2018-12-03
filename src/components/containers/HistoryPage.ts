import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { IRootState } from '@store/model'
import { loadingSelector, historySelector } from '@store/history/selectors'
import { getHistoryRequest } from '@store/history/actions'
import HistoryPage, { IStateProps, IDispatchProps } from '@components/pages/HistoryPage'

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  loading: loadingSelector,
  historyData: historySelector,
})

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  getHistory: () => { dispatch(getHistoryRequest()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(HistoryPage)
