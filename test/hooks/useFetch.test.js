import { renderHook } from "@testing-library/react";
import { useFetch } from "../../src/hooks";

describe("Testing useFetch", () => {
  test("should first", () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    const { data, isLoading } = result.current;
    expect(data).toBe(null);
    expect(isLoading).toBeTruthy();
  });
  /*test("Finally, must return an array of images with content and isLoading in false", async () => {
    const { result } = renderHook(() =>
      useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    );
    await waitFor(() => expect(result.current.isLoading).toBeFalsy());
    //const { data, isLoading } = result.current;
    //expect(data.length).toBeGreaterThan(0);
    //expect(isLoading).toBeFalsy();
  });*/
});
