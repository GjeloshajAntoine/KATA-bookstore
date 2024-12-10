import { Route, Routes, } from 'react-router'
import './App.css'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'

function App() {
  return (
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='/cart' Component={Cart}/>
        </Routes>
  )
}

export default App
