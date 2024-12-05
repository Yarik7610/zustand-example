import { StateCreator } from "zustand"
import { CounterSlice } from "./types"

export const counterSlice: StateCreator<CounterSlice, [["zustand/devtools", never]], [], CounterSlice> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 }))
})

//1 generic - тип текущего стейта, который будем использовать
//2 generic - типы мидлваров
//3 generic - predefined actions (методы дополнительные у слайса)
//4 generic - возвращаемый тип
