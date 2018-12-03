export type ITodo = Readonly<{
  _id: string,
  message: string,
}>

export type ITodos = ReadonlyArray<ITodo>

export type IState = Readonly<{
  loading: boolean,
  errorMessage: string | undefined,
  todos: ITodos,
}>
