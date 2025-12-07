// ccbp publish RJSCPYQN94 nxtWatchSnehith.ccbp.tech

import {Switch, Route} from 'react-router-dom'
import {useState} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import Gaming from './components/Gaming'
import VideoItem from './components/VideoItem'
import NotFound from './components/NotFound'
import {ThemeContext, SavedListContext} from './components/Context'
import './App.css'

const App = () => {
  const [theme, setTheme] = useState(false)
  const [savedList, setSavedList] = useState([])

  const changeTheme = () => {
    setTheme(prev => !prev)
  }

  const changeList = video => {
    setSavedList(prevList => {
      const exists = prevList.find(item => item.id === video.id)
      if (exists) {
        return prevList.filter(item => item.id !== video.id)
      }
      return [...prevList, video]
    })
  }

  return (
    <ThemeContext.Provider value={{theme, setTheme, changeTheme}}>
      <SavedListContext.Provider value={{savedList, changeList}}>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} data-testid="home" />
          <ProtectedRoute
            exact
            path="/trending"
            component={Trending}
            data-testid="trending"
          />
          <ProtectedRoute
            exact
            path="/gaming"
            component={Gaming}
            data-testid="gaming"
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItem}
            data-testid="videoItemDetails"
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideos}
            data-testid="savedVideos"
          />
          <Route exact path="/bad-path" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </SavedListContext.Provider>
    </ThemeContext.Provider>
  )
}
export default App
