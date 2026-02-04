import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5999/")
      .then((response) => {
        setMessage(response.data);
      })
      .catch((error) => {
        console.error("Oops, there is an error", error);
      });
    axios
      .get("http://localhost:5999/items")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Oops, there is an error!", error);
      });
  }, []);

  return <></>;
}

export default App;
