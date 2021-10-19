import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import NumberInput from "../NumberInput";

describe("NumberField", () => {
  it("should render input element", () => {
    render(<NumberInput value={0} variant="outlined" />);
    const inputElement = screen.getByRole(/textbox/i);
    expect(inputElement).toHaveValue("0");
  });

  it("The value should increase after clicking the button", () => {
    render(<NumberInput value={0} variant="outlined" />);
    const inputElement = screen.getByRole(/textbox/i);
    const buttonElement = screen.getByRole("button", { name: "+" });
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("1");
  });

  it(" The value should decrease after clicking the button", () => {
    render(<NumberInput value={0} variant="outlined" />);
    const inputElement = screen.getByRole(/textbox/i);
    const buttonElement = screen.getByRole("button", { name: "-" });
    fireEvent.click(buttonElement);
    expect(inputElement).toHaveValue("-1");
  });
});
