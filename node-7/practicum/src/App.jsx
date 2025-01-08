import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [users, setUsers] = useState([])

  const addPost = () => {
    const newUser = {
      id: Date.now(),
      email,
      password
    }
    setUsers([...users, newUser])
  }

  const sendToServer = () => {
    console.log('was sent to /users', {
      email, password
    })
  }
  lo
  return (
    <>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={addPost}>createSomething</button>
      <button onClick={sendToServer}>send to server</button>
      {
        users.map(item => (
          <div key={item.id}>
            <h3>{item.email}</h3>
            <p>{item.password}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
