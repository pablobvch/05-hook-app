import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {
  
  const {formState, username, email, password, onInputChange, onResetForm} = useForm({username:"", email:"", password:""})
  
  return (
    <>
        <h1>Form with custom hook Form</h1>
        <hr></hr>
        <input type="text" className="form-control" placeholder="username" name="username" value={username} onChange={onInputChange}></input>
        <input type="email" className="form-control mt-2" placeholder="email" name="email" value={email} onChange={onInputChange}></input>
        <input type="password" className="form-control mt-2" placeholder="password" name="password" value={password} onChange={onInputChange}></input>
        <button className="btn btn-primary mt-2" onClick={onResetForm}>Reset</button>
    </>
  )
}
