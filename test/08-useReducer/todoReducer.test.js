import { todoReducer } from "../../src/08-useReducer/todoReducer";

describe("Pruebas sobre el reducer", () => {
  const initialState = [{ id: 1, description: "Demo Todo", done: false }];

  test("debe regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});
    // tiene que ser exactamente al mismo tomando en cuenta el valor por referencia
    // y la posicion en memoria//tiene que ser exactamente al mismo tomando en cuenta el valor por referencia y la posicion en memoria
    expect(newState).toBe(initialState);
  });

  test("debe agregar un todo", () => {
    const action = {
      type: "[TODO] Add Todo",
      payload: { id: 2, description: "Nuevo todo 2", done: false }
    };

    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    //el toContain es similar al toEqual (no al toBe) para cada elemento
    expect(newState).toContain(action.payload);
  });

  test("debe eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove Todo",
      payload: 1
    };
    const newState = todoReducer(initialState, action);

    expect(newState.length).toBe(0);
  });

  test("debe de realizar el toggle del todo", () => {
    const action = {
      type: "[TODO] Toggle Todo",
      payload: 1
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].done).toBeTruthy();
    const newState2 = todoReducer(newState, action);
    expect(newState2[0].done).toBeFalsy();
  });
});
