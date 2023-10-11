import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+{}[]~`?<>"

    for (let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword])
  
  useEffect(() => {passwordGenerator()},[length,numberAllowed,charAllowed,passwordGenerator])

  let copiedPassword = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    copiedPassword.current?.select()
    // copiedPassword.current?.setSelectionRange(0,10)
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Password Generator</h2>
            <div className="mt-6 flex max-w-md gap-x-4">
              <input
                type="text"
                value={password}
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Password"
                readOnly
                ref={copiedPassword}
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                onClick={copyPasswordToClipboard}
              >
                Copy
              </button>
            </div>
            <br />
            <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <input type="range" value={length} 
                min={6} max={100} className='cursor-pointer'
                onChange={(e) => {setLength(e.target.value)}}/>
                <label className='text-white'>Length: {length}</label>
              </div>
              <div className='flex text-sm gap-x-2'>
                <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }} />
                <label className='text-white'>Number</label>
                <input type="checkbox" defaultChecked={charAllowed} id='charInput' onChange={() => {
                  setCharAllowed((prev) => !prev)
                }} />
                <label className='text-white'>Symbols</label>
              </div>
            </div>
          </div>
  )
}

export default App
