import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextInput } from "@components";

describe("TextInput component", () => {
  it("Render correctly", () => {
    render(<TextInput type="text" placeholder="test" />);

    const input = screen.getByPlaceholderText("test");

    expect(input).toBeInTheDocument();
  });
});
