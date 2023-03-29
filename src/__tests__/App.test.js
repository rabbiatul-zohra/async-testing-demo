import { render, screen } from "@testing-library/react";
import App from "../components/App";
import axios from "axios";

describe("App", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Random beer generator/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders content from api", async () => {
    const mAxiosResponse = {
      data: [
        {
          name: "test beer name",
          tagline: "test tagline",
          image_url: "https://dummy-test-url.com/",
        },
      ],
    };
    jest.spyOn(axios, "get").mockResolvedValue(mAxiosResponse);
    render(<App />);

    expect(await screen.findByText("test beer name")).toBeInTheDocument();
  });
});
