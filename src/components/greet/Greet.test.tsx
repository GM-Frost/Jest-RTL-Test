/**
 * Greet should render the text hello and if a name is passed in, it should render hello name.
 *
 */

import { render, screen } from "@testing-library/react";
import Greet from "./Greet";

describe("Greet", () => {
  test("Greet renders correctly", () => {
    render(<Greet />);
    const greetElement = screen.getByText(/hello/i);
    expect(greetElement).toBeInTheDocument();
  });
});
describe("Nested describe", () => {
  //if name is passed in
  test("Greet renders with a name", () => {
    render(<Greet name="Nayan" />);
    const greetElement = screen.getByText(/Hello Nayan/i);
    expect(greetElement).toBeInTheDocument();
  });
});
