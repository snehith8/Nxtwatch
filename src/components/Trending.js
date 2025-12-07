import {useContext} from 'react'
import {HiTrendingUp} from 'react-icons/hi'
import Header from './Header'
import LeftHeader from './LeftHeader'
import {ThemeContext} from './Context'
import Api from './Api'
import {RenderTrendingSuccess} from './Success'
import {RightContainer, MainContainer, TitleRow} from './StyledComponents'

const Trending = () => {
  const {theme} = useContext(ThemeContext)
  const url = `https://apis.ccbp.in/videos/trending`

  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          <TitleRow themed={theme}>
            <HiTrendingUp color="red" size={80} />
            <h1>Trending</h1>
          </TitleRow>
          <Api
            url={url}
            success={data => {
              const videos = data.videos || []
              return <RenderTrendingSuccess list={videos} />
            }}
          />
        </RightContainer>
      </MainContainer>
    </>
  )
}
export default Trending
