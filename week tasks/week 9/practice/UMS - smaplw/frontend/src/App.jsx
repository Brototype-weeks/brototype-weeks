import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserRouter from './Routers/UserRouter'

function App() {


  return (
    <>
      <div>
       <BrowserRouter>
        <Routes>

          <Route  path='/*' element={< UserRouter />} />

        </Routes>
       </BrowserRouter>
      </div>
     
    </>
  )
}

export default App
