import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Random beer generator/i);
    expect(titleElement).toBeInTheDocument();
  });
})
