const {
  render,
  screen,
  fireEvent,
  waitFor
} = require("@testing-library/react");
const { UserContext } = require("../../src/09-useContext/context/userContext");
const { HomePage } = require("../../src/09-useContext/HomePage");
const { useFetch, useCounter } = require("../../src/hooks");

describe("HomePage test", () => {
  const user = {
    id: 1,
    name: "Pablo"
  };

  test("Debe mostrar el componente sin el usuario", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("Debe mostrar el componente con el usuario", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    );
    screen.debug();
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toEqual(JSON.stringify(user, null, 3));
  });
});
