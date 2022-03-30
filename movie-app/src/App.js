import Button from "./Button";
import styles from "./App.module.css";
import {useState} from "react";
import { useEffect } from "react";
function App() {

  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev)=> prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log('i run all the time')
  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("I run when keyword & counter change");
  }, [keyword, counter]);
  console.log("serach keyword")
  return (
    <div>
      <input
      value={keyword}
      onChange={onChange}
      type="text"
      placeholder="search here..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  )
}

export default App;
