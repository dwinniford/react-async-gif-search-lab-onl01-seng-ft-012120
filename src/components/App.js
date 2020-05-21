import React from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'

const apiKey = "kp5WxLbhCnw7fFeHxNJBZsGWxNHZfNhz"


// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifListContainer />
    </div>
  )
}

export default App
