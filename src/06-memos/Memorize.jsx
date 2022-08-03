import { useState } from "react"
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small"

export const Memorize = () => {
  const {counter, increment} = useCounter(10)
  const [show, setShow] = useState(true)
  return (
    <>
        <h1>Counter: <Small counter={counter}/></h1>
        <button className="btn btn-primary" onClick={()=>increment(1)}>+1</button>
        <button className="btn btn-secondary" onClick={()=>setShow(!show)}>show/hide: {JSON.stringify(show)}</button>
    </>
  )
}
