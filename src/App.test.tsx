import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";

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

  it("should allow the user to search for posts", async () => {
    server.use(
      http.get(`${API_URL}/posts`, () => {
        return HttpResponse.json<Post[]>([
          { id: 1, body: "this is a post", title: "test-post", userId: 1 },
          {
            id: 2,
            body: "this is another post",
            title: "another post",
            userId: 1,
          },
        ]);
      })
    );

    render(
      <MockApp>
        <App />
      </MockApp>
    );

    const searchInput = await screen.findByLabelText("Search Posts");
    await userEvent.clear(searchInput);
    await act(async () => {
      await userEvent.type(searchInput, "another");
    });

    const post = await screen.findByText("another post");
    expect(post).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });

  describe("when search meets no results", () => {
    it("should display a message", async () => {
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

      const searchInput = await screen.findByLabelText("Search Posts");
      await userEvent.clear(searchInput);
      await act(async () => {
        await userEvent.type(searchInput, "not found");
      });

      await expect(
        screen.findByText("No posts match your search criteria.")
      ).resolves.toBeInTheDocument();
    });
  });

  describe("deleting posts", () => {
    it("should allow the user to delete a post", async () => {
      const deleteSpy = vi.fn();
      server.use(
        http.get(`${API_URL}/posts`, () => {
          return HttpResponse.json<Post[]>([
            { id: 1, body: "this is a post", title: "test-post", userId: 1 },
          ]);
        }),
        http.delete(`${API_URL}/posts/:id`, ({ params }) => {
          deleteSpy(params);
          return HttpResponse.json({});
        })
      );

      render(
        <MockApp>
          <App />
        </MockApp>
      );
      await screen.findByText("this is a post");

      const deleteButton = await screen.findByText("Remove");
      await act(async () => {
        await userEvent.click(deleteButton);
      });

      expect(deleteSpy).toHaveBeenCalledWith({ id: "1" });
      // expect(item).not.toBeInTheDocument();
    });
  });
});
