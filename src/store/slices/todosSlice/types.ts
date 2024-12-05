export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodosSlice {
  todos: Todo[]
  loading: boolean
  error: string
  removeTodo: (id: Todo["id"]) => void
  fetchTodos: () => Promise<void>
}
