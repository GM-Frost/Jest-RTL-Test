import { renderHook, screen } from "@testing-library/react";
import UseCounter from "./useCounter";

describe("UseCounter", () => {
  test("Should render the initial count", () => {
    const { result } = renderHook(UseCounter);
    expect(result.current.count).toBe(0);
  });
});
