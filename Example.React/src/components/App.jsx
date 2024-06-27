import { useState } from 'react'
import './App.css'
import {Outlet} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <Outlet />
      <div>
            <button  className="btn btn-primary" onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
      </div>

    </>
  )
}

export default App
