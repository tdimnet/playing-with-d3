import { Routes, Route, Link } from 'react-router-dom'

import FunctionBasedHome from './pages/FunctionBasedHome'
import ClassedBasedHome from './pages/ClassedBasedHome'

import HomePage from './pages/Home'

//import './App.css'

function App() {
    return (
        <div className='App'>
            <h1>Playing with D3</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/home-function'>FunctionBasedHome</Link>
                    </li>
                    <li>
                        <Link to='/home-class'>ClassedBasedHome</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home-function' element={<FunctionBasedHome />} />
                <Route path='/home-class' element={<ClassedBasedHome />} />
            </Routes>
        </div>
    )
}

export default App
