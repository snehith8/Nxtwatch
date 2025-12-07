import {useContext} from 'react'
import {useParams} from 'react-router-dom'
import Header from './Header'
import LeftHeader from './LeftHeader'
import Api from './Api'
import {RenderVedioesItem} from './Success'
import {ThemeContext} from './Context'
import {RightContainer, MainContainer} from './StyledComponents'

const VideoItem = () => {
  const {theme} = useContext(ThemeContext)
  const {id} = useParams()
  const url = `https://apis.ccbp.in/videos/${id}`
  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          <Api
            url={url}
            success={data => {
              const videos = data.video_details || []
              return <RenderVedioesItem list={videos} />
            }}
          />
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default VideoItem
