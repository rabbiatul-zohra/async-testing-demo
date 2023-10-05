import { render, screen } from "@testing-library/react";
import App from "../components/App";
import axios from "axios";

describe("App", () => {
  test("renders app title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Random beer generator/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("updates when reloaded", async () => {
    const mockedData = {
      data: [
        {
          name: "test beer 1",
          image_url: "some-image-url",
        },
      ],
    };

    jest.spyOn(axios, "get").mockResolvedValue(mockedData);
    render(<App />);
    const beerTitle = await screen.findByText("test beer 1");
    expect(beerTitle).toBeInTheDocument();
  });
});
