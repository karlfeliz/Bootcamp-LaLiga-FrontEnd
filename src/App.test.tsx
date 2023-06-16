import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home", () => {
  render(<App />);
  const linkElement = screen.getByText(/This is a home page/i);
  expect(linkElement).toBeInTheDocument();
});
