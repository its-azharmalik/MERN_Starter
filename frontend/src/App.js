import React from 'react'
import Navbar from './Components/Navbar Components/Navbar'
import HomeScreen from './screens/HomeScreen'
import './App.css'
import Posts from './Components/Posts Components/Posts'


const App = () => {
    return (
        <div className='screen-management'>      
            <Navbar />
            <div className='column'>
                <HomeScreen />
                <Posts />
            </div>
        </div>
    )
}

export default App
