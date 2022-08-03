import { useCounter } from "../hooks/useCounter"

export const CounterWithHook = () => {

  const {counter, increment, decrement, reset} = useCounter()

  return (
    <>
        <h1>CounterWithHook: {counter}</h1>
        <hr></hr>
        <button className="btn btn-primary" onClick={()=>increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>Reset</button>
        <button className="btn btn-primary" onClick={()=>decrement(2)}>-1</button>
    </>
  )
}
