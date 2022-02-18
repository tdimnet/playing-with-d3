import { Routes, Route, Link } from 'react-router-dom'

import FunctionBasedHome from './pages/FunctionBasedHome'
import ClasseBasedHome from './pages/ClasseBasedHome'
import ClasseBasedBarChart from './pages/ClasseBasedBarChart'

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
                        <Link to='/home-class'>ClasseBasedHome</Link>
                    </li>
                    <li>
                        <Link to='/barchart-class'>ClasseBasedBarChart</Link>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/home-function' element={<FunctionBasedHome />} />
                <Route path='/home-class' element={<ClasseBasedHome />} />
                <Route path='/barchart-class' element={<ClasseBasedBarChart />} />
            </Routes>
        </div>
    )
}

export default App
