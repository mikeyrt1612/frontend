import { createStandardAction } from 'typesafe-actions'

import * as types from '@store/todos/actionTypes'
import { IError } from '@services/model'
import { ITodosData } from '@services/api/todos/model'

// GET_TODOS
export const getTodosRequest = createStandardAction(types.GET_TODOS_REQUEST)()

export const getTodosSuccess = createStandardAction(types.GET_TODOS_SUCCESS)<ITodosData>()

export const getTodosError = createStandardAction(types.GET_TODOS_ERROR)<IError>()

// POST TODOS
export const postTodosRequest = createStandardAction(types.POST_TODOS_REQUEST)<{
  message: string,
}>()

export const postTodosSuccess = createStandardAction(types.POST_TODOS_SUCCESS)()

export const postTodosError = createStandardAction(types.POST_TODOS_ERROR)<IError>()

// DELETE TODOS
export const deleteTodosRequest = createStandardAction(types.DELETE_TODOS_REQUEST)<{
  todoId: string,
}>()

export const deleteTodosSuccess = createStandardAction(types.DELETE_TODOS_SUCCESS)()

export const deleteTodosError = createStandardAction(types.DELETE_TODOS_ERROR)<IError>()

// TODOS SEND
export const sendTodosRequest = createStandardAction(types.SEND_TODO_REQUEST)<{
  todoId: string,
  recipientId: string,
}>()

export const sendTodosSuccess = createStandardAction(types.SEND_TODO_SUCCESS)()

export const sendTodosError = createStandardAction(types.SEND_TODO_ERROR)<IError>()
