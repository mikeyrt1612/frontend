import { ITodosData } from '../model'

export const todosMockData: ITodosData = [
  {
    _id: '0',
    title: 'TITLE 0',
    message: 'MESSAGE 0',
  },
  {
    _id: '1',
    title: 'TITLE 1',
    message: 'MESSAGE 1',
  },
  {
    _id: '2',
    title: 'TITLE 2',
    message: 'MESSAGE 2',
  },
]

export const getTodos = jest.fn(() => ({ data: todosMockData }))

export const createTodo = jest.fn(() => {})

export const sendTodo = jest.fn(() => {})

export const deleteTodo = jest.fn(() => {})
