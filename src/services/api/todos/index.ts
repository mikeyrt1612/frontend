import axios, { AxiosPromise } from 'axios'

import { ITodosData } from './model'

export const getTodos = (): AxiosPromise<ITodosData> =>
  axios.get('/api/todos')

export const deleteTodo = (id: string): AxiosPromise<void> =>
  axios.delete(`/api/todos/${id}`)

export const createTodo = (message: string): AxiosPromise<void> =>
  axios.post('/api/todos', { message })

export const sendTodo = (todoId: string, recipientId: string): AxiosPromise<void> =>
  axios.post('/api/todos/send', { todoId, recipientId })
