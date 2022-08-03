import { useState } from "react"

export const CouterApp = () => {

    const [{counter1, counter2, counter3}, setCounter] = useState({
        counter1:10,
        counter2:20,
        counter3:30
    })
    
    const handleOnClick = ()=>setCounter(counter => ({...counter, counter1:counter1+1}))

    return (
        <>
            <h1>Couter1: {counter1}</h1>
            <h1>Couter2: {counter2}</h1>
            <h1>Couter3: {counter3}</h1>
            <hr></hr>
            <button className={"btn"} onClick={handleOnClick}>+1</button>
        </>
  )
}
