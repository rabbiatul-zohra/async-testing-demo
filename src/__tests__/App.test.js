import { render, screen, waitFor } from "@testing-library/react";
import App from "../components/App";
import getBeer from "../requests/getBeer";

jest.mock("../requests/getBeer");

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Random beer generator/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("component renders with api results", async () => {
    getBeer.mockResolvedValue({
      name: "test beer name",
      tagline: "test tagline",
      image_url: "https://dummy-test-url.com/",
    });

    render(<App />);

    await waitFor(() => {
      expect(screen.getByText("test beer name")).toBeInTheDocument();
    });
  });
});
