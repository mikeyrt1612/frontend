import { IModalConfig } from '@store/modal/model'

export default (deleteTodo: () => void): IModalConfig => ({
  header: {
    label: 'Delete Todo',
    icon: 'trash alternate',
  },
  content: 'Are you sure you want to delete this todo?',
  action: {
    label: 'Delete',
    callback: deleteTodo,
  },
})
