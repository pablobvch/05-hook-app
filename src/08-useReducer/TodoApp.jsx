import { useTodo } from "../hooks"
import { TodoAdd } from "./TodoAdd"
import { TodoList } from "./TodoList"

export const TodoApp = () => {

  const {todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo} = useTodo()

  return (
    <>
        <h1>TodoApp {todosCount} <small>pending: {pendingTodosCount}</small></h1>
        <hr></hr>
        <div className="row">
          <div className="col-7">
            <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
          </div>
          <div className="col-5">
            <TodoAdd onNewTodo={handleNewTodo}/>
          </div>
        </div>
    </>
  )
}
