import react, { useEffect, useState } from "react";

const getList = (query) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('query: ', query);
      resolve([4, 5, 6])
    }, 500)
  })
}
// 自定义 hook
const useApi = () => {
  const [data, setData] = useState([1, 2, 3])
  const [query, setQuery] = useState('')

  useEffect(() => {
    (async () => {
      const data = await getList(query)
      setData(data)
    })()
  }, [query])

  return [{data}, setQuery]
}

export default useApi