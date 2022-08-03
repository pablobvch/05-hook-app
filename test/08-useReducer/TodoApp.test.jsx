const { TodoApp } = require("../../src/08-useReducer/TodoApp");
const {
  act,
  renderHook,
  render,
  screen,
  fireEvent
} = require("@testing-library/react");
const { useTodo } = require("../../src/hooks");

jest.mock("../../src/hooks/useTodo");

describe("TodoApp tests", () => {
  useTodo.mockReturnValue({
    handleDeleteTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    pendingTodosCount: 1,
    todos: [
      { id: 1, description: "Todo #1", done: false },
      { id: 2, description: "Todo #2", done: true }
    ],
    todosCount: 2
  });

  test("Debe mostrar el componente correctamente", () => {
    render(<TodoApp />);
    expect(screen.getByText("Todo #1")).toBeTruthy();
    expect(screen.getByText("Todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
