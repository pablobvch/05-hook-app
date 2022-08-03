import { useEffect, useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {
  
  const [formState, setFormState] = useState({username:"pablobvch", email:"pablo@mail.com"})

  const {username, email} = formState

  const onInputChange = ({target}) => {
    const {name, value} = target
    setFormState({...formState, [name]: value})
  }

  return (
    <>
        <h1>Simple Form</h1>
        <hr></hr>
        <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange}></input>
        {username === "Pablo2" && <Message/>}
        <input type="email" className="form-control mt-2" placeholder="email" name="email" value={email} onChange={onInputChange}></input>
        
    </>
  )
}
