import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@components";
import "@testing-library/jest-dom";

describe("Button component", () => {
  it("Render button correctly", () => {
    render(<Button type="button" onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Button should be clicked", async () => {
    const onClick = jest.fn();
    render(<Button type="button" onClick={onClick} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("Button should not be clicked", async () => {
    const onClick = jest.fn();
    render(<Button type="button" onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
