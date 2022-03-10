import react, { useState, useEffect, useCallback } from "react";

function Child({ callback }) {
  useEffect(() => {
    callback()
  }, [callback])

  return <div>子组件</div>
}

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [kw, setKw] = useState('')

  const callback = useCallback(() => {
    console.log('我是callback');
  }, [])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" onChange={(e) => setKw(e.target.value)} />
      <Child callback={callback} />
    </div>
  )
}

export default App