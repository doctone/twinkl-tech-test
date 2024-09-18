import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from ".././tests/msw";
import { http, HttpResponse } from "msw";

describe("<App />", () => {
  it("should render", () => {
    server.use(
      http.get("https://jsonplaceholder.typicode.com/todos/1", () => {
        return HttpResponse.json({ name: "John" });
      })
    );
    render(<App />);
    expect(screen.getByText("Hello Twinkl!")).toBeInTheDocument();
  });
});
