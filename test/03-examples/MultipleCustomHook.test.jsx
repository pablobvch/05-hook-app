const {
  render,
  screen,
  fireEvent,
  waitFor
} = require("@testing-library/react");
const { MultipleCustomHook } = require("../../src/03-examples");
const { useFetch, useCounter } = require("../../src/hooks");

jest.mock("../../src/hooks/useFetch");
jest.mock("../../src/hooks/useCounter");

describe("MultipleCustomHook test", () => {
  const mockIncrement = jest.fn();

  useCounter.mockReturnValue({ counter: 1, increment: mockIncrement });

  //antes de cada prueba
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Deberia mostrar el componente por defecto", () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    });

    render(<MultipleCustomHook />);
    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking Bads quotes"));
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeTruthy();
  });
  test("Debe mostrar un quote", () => {
    useFetch.mockReturnValue({
      data: [{ author: "Pablo", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHook />);
    expect(screen.getByText("Hola Mundo")).toBeTruthy();
    expect(screen.getByText("Pablo")).toBeTruthy();
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    expect(nextButton.disabled).toBeFalsy();
  });
  test("Debe llamar la funcion incrementar", async () => {
    useFetch.mockReturnValue({
      data: [{ author: "Pablo", quote: "Hola Mundo" }],
      isLoading: false,
      hasError: null
    });

    render(<MultipleCustomHook />);
    const nextButton = screen.getByRole("button", { name: "Next quote" });
    fireEvent.click(nextButton);
    expect(mockIncrement).toHaveBeenCalled();
  });
});
