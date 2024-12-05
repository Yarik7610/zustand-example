import { StateCreator } from "zustand"
import { SERVER_URI } from "../../../constants/api"
import { TodosSlice } from "./types"

export const todosSlice: StateCreator<TodosSlice, [["zustand/devtools", never]], [], TodosSlice> = (set) => ({
  todos: [],
  loading: false,
  error: "",
  removeTodo: (id) => set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  fetchTodos: async () => {
    set({ loading: true })
    try {
      const response = await fetch(SERVER_URI)
      if (!response.ok) throw response
      const data = await response.json()
      set({ todos: data })
    } catch (e) {
      if (e instanceof Error) set({ error: e.message })
    } finally {
      set({ loading: false })
    }
  }
})
