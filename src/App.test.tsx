import { render, screen } from "@testing-library/react";
import App from "./App";
import { server } from ".././tests/msw";
import { http, HttpResponse } from "msw";
import { API_URL, Post } from "./api";
import { MockApp } from "../tests/mockApp";

describe("<App />", () => {
  it("should display loading state", async () => {
    server.use(
      http.get(`${API_URL}/posts`, () => {
        return HttpResponse.json([]);
      })
    );

    render(
      <MockApp>
        <App />
      </MockApp>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display a list of posts", async () => {
    server.use(
      http.get(`${API_URL}/posts`, () => {
        return HttpResponse.json<Post[]>([
          { id: 1, body: "this is a post", title: "test-post", userId: 1 },
        ]);
      })
    );

    render(
      <MockApp>
        <App />
      </MockApp>
    );

    const post = await screen.findByRole("listitem");
    expect(post).toBeInTheDocument();
  });

  it.todo("should allow the user to search for posts");
});
