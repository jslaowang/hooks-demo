import react, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log('点击次数: ', count);
    }, 500);
  })

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>点击{count}次</button>
    </div >
  )
}

export default App