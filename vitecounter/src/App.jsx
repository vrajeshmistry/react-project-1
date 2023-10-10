import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const minusValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      Count Is: {count}
      <br /><br />
      <button onClick={addValue}>Add</button><br /><br />
      <button onClick={minusValue}>Minus</button>
    </>
  )
}

export default App
