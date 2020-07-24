import React from 'react'

import { useGrowl, Growl } from 'react-growl'
import 'react-growl/dist/index.css'
import './App.css'

const App = () => {
  const [active, setActive] = useGrowl()

  return (
    <div className="App">
      <header className="App-header">
        <a className="App-link" href="/sample">
          Go to the Other component
        		</a>
        <p>
            Updated App.js file
        		</p>

        <a className="App-link" href="#" onClick={() => void setActive(true)}>
          Clik here to activate the growl
        		</a>
      </header>
      <Growl onDismissed={() => setActive(false)} active={active} message="Hello World!" />
    </div>
  )
}

export default App
