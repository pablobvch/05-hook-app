import { useRef } from "react"

export const FocusScreen = () => {
    const inputRef = useRef()

    const onClick = ()=>{
        inputRef.current.select()
    }

  return (
        <>
            <h1>Focus Screen</h1>
            <hr/>
            <input ref={inputRef} type="text" className="form-control" placeholder="Type your name"></input>
            <button className="btn mt-2 btn-primary" onClick={onClick}>Set Focus</button>
        </>
    )
}
