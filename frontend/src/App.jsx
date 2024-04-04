import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error));
    console.log(jokes);
  },[]);
  return (
    <>
      <h1>Total Jokes : {jokes.length}</h1>
      <ul>
        {jokes &&
          jokes.map((joke, index) => (
            <li key={index + "a"}>
              <span>{ joke.joke}</span>
            </li>
          ))}
      </ul>
    </>
  );
}

export default App;
