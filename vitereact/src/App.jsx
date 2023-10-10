import { useState } from 'react'
import HelloWorld from './HelloWorld'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello .. Welcome to Vue + React</h1>
      <br />
      <HelloWorld />
    </>
  )
}

export default App
