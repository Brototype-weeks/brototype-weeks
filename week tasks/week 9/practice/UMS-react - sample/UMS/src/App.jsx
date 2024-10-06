
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserRouters from './Routers/UserRouters'


function App() {


  return (
    <>
      <div>
        <BrowserRouter>
        
        <Routes>
          <Route path='/*' element={<UserRouters/>} />
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
