import { Button } from "@components";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

describe("CustomButton", () => {
  it("should render a button ", () => {
    render(<Button type="button" name="click-me" onClick={() => {}} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should call the onClick function when clicked", async () => {
    const onClick = jest.fn();
    render(<Button type="button" onClick={onClick} />);

    const button = screen.getByRole("button");

    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should not call the onClick function when it isn't clicked", async () => {
    const onClick = jest.fn();
    render(<Button type="button" onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
  });
});
