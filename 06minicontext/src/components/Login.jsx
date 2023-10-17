import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({userName,userPassword})
    }

    return (
        <div>
            <h2>Login</h2>

            <label>UserName</label>
            <input
             type="text" 
             value={userName}
             onChange={(e) => setUserName(e.target.value)}
             />

             <br />
             <br />

            <label>Password</label>
            <input type="password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
             />
            <br />
            <br /> 
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login