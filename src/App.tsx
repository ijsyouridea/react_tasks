import { useState } from "react";

function App() {
  const [greeting] = useState("Hello");
  return <div>{greeting}</div>;
}

export default App;
