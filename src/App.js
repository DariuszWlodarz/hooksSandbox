import React, { useState } from 'react'
import './App.css'


function App() {
  const [state, setSafeState] = useState({ text: "", checked: false })

  return (
    <div className="App">
      Learn React v{React.version}
      <input type="text" onChange={e => setSafeState({ ...state, text: e.target.value })}/>
      <input type="checkbox" onChange={e => setSafeState({ ...state, checked: e.target.checked })}/>
      <p>{state.text} - {state.checked.toString()}</p>
    </div>
  )
}

export default App
