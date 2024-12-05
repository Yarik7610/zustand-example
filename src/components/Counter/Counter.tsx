import { useBoundedStore } from "../../store/store"

export const Counter = () => {
  const { count, increment, decrement } = useBoundedStore()

  const handleIncrement = () => {
    increment()
  }

  const handleDecrement = () => {
    decrement()
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}
