import {useContext} from 'react'
import Header from './Header'
import LeftHeader from './LeftHeader'
import {ThemeContext} from './Context'
import {RightContainer, MainContainer, Columned} from './StyledComponents'

const NotFound = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          <Columned>
            <img
              src={
                theme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
              }
              alt="not found"
              width="90%"
            />
            <h1>Page Not Found</h1>
            <p>we are sorry, the page you requested could not be found.</p>
          </Columned>
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default NotFound
