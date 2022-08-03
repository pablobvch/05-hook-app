const {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook
} = require("@testing-library/react");
import React from "react";
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { UserContext } = require("../../src/09-useContext/context/userContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { useFetch, useCounter } = require("../../src/hooks");

describe("LoginPage", () => {
  const user = { id: 123, name: "Pablo Ariel" };
  const setUserMock = jest.fn();

  test("Debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });
  test("Debe de llamar el setUser cuando se hace click en el boton", () => {
    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    );
    const setUserButton = screen.getByRole("button");
    fireEvent.click(setUserButton);
    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith(user);
  });
});
