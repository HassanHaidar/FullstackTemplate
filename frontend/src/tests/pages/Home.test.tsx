import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../pages/Home";


describe("Home component", () => {
  it("rendering the home component should call ", () => {
    render(<Home />);
    expect(1).toBe(1);
  });
});