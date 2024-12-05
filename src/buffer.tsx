// @ts-nocheck

import create from "zustand"

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 })
}))

export default useStore

export default function Counter() {
  const { count, increment, decrement, reset } = useStore()

  return (
    <main>
      <h2>{count}</h2>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>Reset</button>
      </div>
    </main>
  )
}

//Каждый раз при смене в сторе состояния рендер, даже если объект user не поменял свои внутренние свойства, т.к
//изначально сравнение объектов по ссылке, а объект создается по новой при рендере
const userData = useStore((state) => ({ name: state.user.name, age: state.user.age }))

//Вариант через хук сравнения по значениям внутри объекта / массива
import { useShallow } from "zustand/shallow"
//Рендер будет только если age или name сменятся
const userData = useStore(useShallow((state) => ({ name: state.user.name, age: state.user.age })))

//Вариант через useCallback внутри useStore
const todoById = useStore(useCallback((state) => state.todos[id], [id]))

//Вариант подписки на примитивные поля
const userName = useStore((state) => state.user.name)
const userAge = useStore((state) => state.user.age)

const useStore = create((set) => ({
  todos: [{ id: 1, text: "Learn Zustand" }],
  clear: () => set({}, true) // Полная замена состояния пустым объектом, а не слияние с текущим стейтом
}))

const useStore = create((set) => ({ count: 0 }))

function Counter() {
  const countRef = useRef(useStore.getState().count)

  useEffect(() => {
    const unsubscribe = useStore.subscribe((state) => (countRef.current = state.count))
    return () => {
      unsubscribe()
    }
  }, [])
}
