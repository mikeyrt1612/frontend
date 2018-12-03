import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import TodosPage, { IStateProps, IDispatchProps } from '@components/pages/TodosPage'
import { IRootState } from '@store/model'
import { loadingSelector, todosSelector } from '@store/todos/selectors'
import { getTodosRequest } from '@store/todos/actions'

export const mapStateToProps = createStructuredSelector<IRootState, IStateProps>({
  loading: loadingSelector,
  todos: todosSelector,
})

export const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  getTodos: () => { dispatch(getTodosRequest()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage)
