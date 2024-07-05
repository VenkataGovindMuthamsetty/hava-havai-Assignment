import './App.css';
import Home from './components/Home'
import Airports from './components/Airports'
import {Route, Routes} from 'react-router-dom'

const App = () => (
    <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/Airpots' Component={Airports}/>
    </Routes>
)

export default App;
