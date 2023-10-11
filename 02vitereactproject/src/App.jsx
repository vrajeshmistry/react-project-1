import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [color, setColor] = useState("olive")

  let colours = ["red","blue","green","olive","black","yellow"]

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center
      bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl'>
          {colours.map((colour) => (
            <button className='outline-none px-4 py-1 rounded-full
            text-white shadow-lg'
            style={{ backgroundColor: colour }} onClick={() => {setColor(colour)}}>{colour}</button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
