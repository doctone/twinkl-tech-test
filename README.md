# Twinkl React Tech Test

## Task description

You are tasked with creating a React application that interacts with a Posts management API (https://jsonplaceholder.typicode.com/posts) to perform CRUD operations (Create, Read, Update, Delete). The application should be implemented using TypeScript and designed to be production-ready.

Refer to the guide on how to use the jsonplaceholder API:
https://jsonplaceholder.typicode.com/guide/

#### Time Limit: We don't expect you to spend longer than 3 hours on this task. If you'd like to capture any decisions, thoughts, or next steps you would take, feel free to do so.

#### Requirements

##### Fetch and display posts

- Implement a component that fetches the list of posts from https://jsonplaceholder.typicode.com/posts - [x]
- Display all fetched posts in a list format. - [x]

##### Search mechanism

- Implement a search bar that allows a user to search for posts by title and display only the desired posts. The search should be triggered on change. - [x]

##### Delete post

- For each post in the list, provide a "Remove" button. - [x]
- Implement the functionality to delete a post when the "Remove" button is clicked, using the appropriate server-side REST API method DELETE. - [x]

##### Testing

- Write sufficient tests to satisfy a production-ready application. - [x]

##### Documentation

- Add appropriate documentation for your application. - [x]

#### Wireframes

##### Mobile

![mobile_view](src/assets/mobile_view.png?raw=true)

##### Desktop

![pc_view](src/assets/pc_view.png?raw=true)

## Getting Started

### Prerequisites

- Node.js: Ensure you have Node.js version 20 or higher installed.

### Installation

#### Clone the repository:

```
git clone https://github.com/doctone/twinkl-tech-test
```

```
cd twinkl-tech-test
```

#### Install dependencies:

```
npm i
```

### Scripts

#### Development Server: Start the development server.

```
npm run dev
```

#### Lint: Lint the codebase.

```
npm run lint
```

#### Lint & Fix: Lint and automatically fix issues in the codebase.

```
npm run lint:fix
```

#### Format: Format the codebase using Prettier.

```
npm run format
```

#### Test: Run the test suite.

```
npm run test
```

## Notes

### Stack

- tanstack-query -> handling all the state management of fetched data
- msw -> mocking API calls
- chakra -> semantic, accessible UI components

### Options for extension:

- more operations ( Create, Edit/update posts )
- search
  - fuse JS for fuzzy search
  - debounce - potentially filter on the server rather than client
  - minimum character search
- pagination of fetching posts
  - but the API doesn't support this
- auth flow, utilize userIds of posts

## Docker

You can run the app with `docker compose up` if you want the run the production-ready app.

It will run the app at http://localhost:80 and any changes that are made in your `/dist` folder will be mounted directly into the container, giving you hot reload by just running `npm run build` when you're developing.
