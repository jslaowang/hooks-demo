import react, { useState, useEffect, useMemo } from "react";

function Child({ data }) {
  useEffect(() => {
    console.log('查询条件', data);
  }, [data])

  return <div>子组件</div>
}

function App() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [kw, setKw] = useState('')

  const data = useMemo(() => ({
    name,
    phone
  }), [name, phone])

  return (
    <div className="App">
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <input type="text" onChange={(e) => setPhone(e.target.value)} />
      <input type="text" onChange={(e) => setKw(e.target.value)} />
      <Child data={data} />
    </div>
  )
}

export default App