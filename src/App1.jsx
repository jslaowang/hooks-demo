import react from "react";
import useApi from "./hooks/useApi";


function App() {
  const [{ data }, setQuery] = useApi()

  return (
    <div className="App">
      {
        data.map((item, index) => <div key={index}>{item}</div>)
      }
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
    </div>
  )
}

export default App