import { useState } from "react";
import "./App.css";
import HC0 from "../co/HC0";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <HC0 />
    </div>
  );
}

export default App;
