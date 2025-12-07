import {useContext} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Header from './Header'
import LeftHeader from './LeftHeader'
import {ThemeContext} from './Context'
import Api from './Api'
import {RenderGamingSuccess} from './Success'
import {RightContainer, MainContainer, TitleRow} from './StyledComponents'

const Gaming = () => {
  const url = `https://apis.ccbp.in/videos/gaming`
  const {theme} = useContext(ThemeContext)

  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          <TitleRow themed={theme}>
            <SiYoutubegaming color="red" size={80} />
            <h1>Gameing</h1>
          </TitleRow>
          <Api
            url={url}
            success={data => {
              const videos = data.videos || []
              return <RenderGamingSuccess list={videos} />
            }}
          />
        </RightContainer>
      </MainContainer>
    </>
  )
}
export default Gaming
