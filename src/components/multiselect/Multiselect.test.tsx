import { render, screen } from "@testing-library/react";
import Multiselect from "./Multiselect";
import userEvent from "@testing-library/user-event";

describe("Multiselect", () => {
  test("renders correctly", () => {
    render(<Multiselect />);
    const multiselect = screen.getByRole("listbox");
    expect(multiselect).toBeInTheDocument();
  });

  //User Event for Multiselect

  test("renders correctly after selecting multiple options", async () => {
    userEvent.setup();
    render(<Multiselect />);

    await userEvent.selectOptions(screen.getByRole("listbox"), ["1", "3"]);

    const optionA = screen.getByRole("option", {
      name: "A",
    }) as HTMLOptionElement;
    const optionB = screen.getByRole("option", {
      name: "B",
    }) as HTMLOptionElement;
    const optionC = screen.getByRole("option", {
      name: "C",
    }) as HTMLOptionElement;

    expect(optionA.selected).toBe(true);
    expect(optionB.selected).toBe(false);
    expect(optionC.selected).toBe(true);
  });
});
