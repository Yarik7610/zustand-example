import { useEffect } from "react"
import { useShallow } from "zustand/shallow"
import { Todo } from "../../store/slices/todosSlice/types"
import { useBoundedStore } from "../../store/store"

export const Todos = () => {
  const { todos, loading, error, removeTodo, fetchTodos } = useBoundedStore(
    useShallow((state) => ({
      todos: state.todos,
      loading: state.loading,
      error: state.error,
      removeTodo: state.removeTodo,
      fetchTodos: state.fetchTodos
    }))
  )

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  const handleRemoveTodo = (id: Todo["id"]) => () => {
    removeTodo(id)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {todos.map(({ id, title }) => (
        <li key={id} onClick={handleRemoveTodo(id)}>
          {title}
        </li>
      ))}
    </ul>
  )
}
