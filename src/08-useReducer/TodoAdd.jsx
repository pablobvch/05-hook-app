import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {
  const {description, onInputChange, onResetForm} = useForm({description:""})

  const onFormSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getTime()*3,
      description,
      done:false
    }
    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
        <h4>Add todo</h4>
        <input className="form-control"
               name="description"
               onChange={onInputChange}
               placeholder="Todo" 
               type="text" 
               value={description}/>
        <button type="submit" className="btn btn-outline-primary mt-1">Add</button>
    </form>
  )
}
