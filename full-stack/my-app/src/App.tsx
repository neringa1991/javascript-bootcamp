import "./App.css";
import {useEffect, useState} from "react";
import axios from "axios";

interface dataProp {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [data, setData] = useState([]);

  async function fetch() {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setData(res.data);
  }
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="App">
      {data?.map((item: dataProp) => {
        return (
          <h1 key={item.id}>
            {item.id}-{item.title}
          </h1>
        );
      })}
    </div>
  );
}

export default App;

// db.collection.insertMany([{}, {}, {}, {}, {}, {}]);
