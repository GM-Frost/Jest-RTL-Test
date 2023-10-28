import { renderHook, screen } from "@testing-library/react";
import UseCounter from "./useCounter";

describe("UseCounter", () => {
  test("Should render the initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });

  test("Should accept and render the same intial count", () => {
    const { result } = renderHook(UseCounter, {
      initialProps: { initialCount: 10 },
    });
    expect(result.current.count).toBe(10);
  });
});
