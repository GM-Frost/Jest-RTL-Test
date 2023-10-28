import { render, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import UserEvent from "@testing-library/user-event";

describe("CounterTwo", () => {
  test("Renders correctly", () => {
    render(<CounterTwo count={0} />);
    const textElement = screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
  });

  //Click handlers work as expected
  // USE MOCK FUNCTIONS
  test("handlers are called", async () => {
    //create two mock functions
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();

    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />
    );
    const incrementButton = screen.getByRole("button", { name: "Increment" });
    const decrementButton = screen.getByRole("button", { name: "Decrement" });

    await UserEvent.click(incrementButton);
    await UserEvent.click(decrementButton);
    //Two mock functions should be called
    expect(incrementHandler).toHaveBeenCalledTimes(1);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
  });
});
