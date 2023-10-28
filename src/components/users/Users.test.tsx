import { render, screen } from "@testing-library/react";
import Users from "./Users";
import { server } from "../mocks/Server";
import { HttpResponse, http } from "msw";

describe("Users", () => {
  test("Renders correctly", () => {
    render(<Users />);
    const textElement = screen.getByText("Users");
    expect(textElement).toBeInTheDocument();
  });

  //API call works as expected
  // List of users is rendered

  test.skip("renders a list of users", async () => {
    render(<Users />);
    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });

  // Error handling works as expected
  test.skip("renders an error message", async () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/users", () => {
        return new HttpResponse(null, {
          status: 500,
          statusText: "Error Fetching Users",
        });
      })
    );
    render(<Users />);
    const error = await screen.findByText("Error Fetching Users");
    expect(error).toBeInTheDocument();
  });
});
