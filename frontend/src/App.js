import React from 'react'
import Navbar from './Components/Navbar Components/Navbar'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import Posts from './Components/Posts Components/Posts'
import { BrowserRouter as Router, Route } from 'react-router-dom'



const App = () => {
    return (
        <div className='screen-management'>      
           <Router>
            <Navbar />
            <div className='column'>
            <Route path='/' component={HomeScreen} exact /> 
            </div>
            </Router>
        </div>
    )
}

export default App
