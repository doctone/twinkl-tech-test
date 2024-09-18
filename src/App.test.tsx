import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from ".././tests/msw";
import { http, HttpResponse } from "msw";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { API_URL, Post } from "./api";

const queryClient = new QueryClient();

describe("<App />", () => {
  it("should display a list of posts", async () => {
    server.use(
      http.get(`${API_URL}/posts`, () => {
        return HttpResponse.json<Post[]>([
          { id: 1, body: "this is a post", title: "test-post", userId: 1 },
        ]);
      })
    );

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    const post = await screen.findByRole("listitem");
    expect(post).toBeInTheDocument();
  });
});
