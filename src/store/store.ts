import { create } from "zustand"
import { devtools } from "zustand/middleware"
import { counterSlice } from "./slices/counterSlice/counterSlice"
import { CounterSlice } from "./slices/counterSlice/types"
import { todosSlice } from "./slices/todosSlice/todosSlice"
import { TodosSlice } from "./slices/todosSlice/types"

export const useBoundedStore = create<CounterSlice & TodosSlice>()(
  devtools((...funcs) => ({
    ...counterSlice(...funcs),
    ...todosSlice(...funcs)
  }))
)
