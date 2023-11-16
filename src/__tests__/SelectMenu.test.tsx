import { render, screen, fireEvent } from "@testing-library/react";
import { SelectMenu } from "@components";
import "@testing-library/jest-dom";

describe("SelectMenu component", () => {
  it("Test 1", () => {
    render(
      <SelectMenu
        options={[
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ]}
        onChange={() => {}}
      />,
    );

    const options = screen.getAllByRole("option");

    expect(options.length).toBe(2);
  });

  it("Test 2", async () => {
    render(
      <SelectMenu
        options={[
          { key: "1", label: "Option 1" },
          { key: "2", label: "Option 2" },
        ]}
        onChange={() => {}}
      />,
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "2" } });

    const options = screen.getAllByRole("option");

    expect((options[0] as HTMLOptionElement).selected).toBeFalsy();
    expect((options[1] as HTMLOptionElement).selected).toBeTruthy();
  });
});
