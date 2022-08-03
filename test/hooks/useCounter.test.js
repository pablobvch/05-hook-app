const { act, renderHook } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks");

describe("Pruebas sobre useCounter", () => {
  test("Debe retornar default values", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, setCouter, decrement, increment, reset } = result.current;
    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function));
    expect(increment).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });
  test("Debe retornar default value 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });
  test("Debe incrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, setCouter, decrement, increment, reset } = result.current;
    act(() => {
      increment();
      increment(2);
    });

    expect(result.current.counter).toBe(103);
  });
  test("Debe decrementar el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, setCouter, decrement, increment, reset } = result.current;
    act(() => {
      decrement();
      decrement(2);
    });

    expect(result.current.counter).toBe(97);
  });
  test("Debe resetear el contador", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, setCouter, decrement, increment, reset } = result.current;
    act(() => {
      increment(1);
      decrement(2);
      reset();
    });

    expect(result.current.counter).toBe(0);
  });
});
