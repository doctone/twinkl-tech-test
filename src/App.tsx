import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/1"
      );
      const data = await response.json();
      return data;
    };
    fetchData().then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>Hello Twinkl!</h1>
    </div>
  );
};

export default App;
