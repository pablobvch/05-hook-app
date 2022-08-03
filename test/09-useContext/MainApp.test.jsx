const {
  render,
  screen,
  fireEvent,
  waitFor,
  renderHook
} = require("@testing-library/react");
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from "../../src/09-useContext/MainApp";
const { default: JSDOMEnvironment } = require("jest-environment-jsdom");
const { UserContext } = require("../../src/09-useContext/context/userContext");
const { LoginPage } = require("../../src/09-useContext/LoginPage");
const { useFetch, useCounter } = require("../../src/hooks");

describe("MainApp test", () => {
  test("debe mostrar la homepage", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Home Page")).toBeTruthy();
  });
  test("debe mostrar el loginpage", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp />
      </MemoryRouter>
    );
    expect(screen.getByText("Login Page")).toBeTruthy();
  });
});
