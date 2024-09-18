import { usePosts } from "./usePosts";

const App = () => {
  const { data, isLoading } = usePosts();

  if (isLoading || !data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Hello Twinkl!</h1>
      <ul>
        {data.map(({ body, id, title }) => (
          <li key={id}>
            <h2>{title}</h2>
            <p>{body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
