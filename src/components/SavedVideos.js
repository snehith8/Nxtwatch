import {useContext} from 'react'
import {IoSave} from 'react-icons/io5'
import Header from './Header'
import LeftHeader from './LeftHeader'
import {RightContainer, MainContainer, TitleRow} from './StyledComponents'
import {ThemeContext, SavedListContext} from './Context'
import {RenderSavedItem} from './Success'

const SavedVideos = () => {
  const {theme} = useContext(ThemeContext)
  const {savedList} = useContext(SavedListContext)

  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          <TitleRow
            themed={theme}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              padding: '10px',
            }}
          >
            <TitleRow themed={theme}>
              <IoSave color="red" size={80} />
              <h1 style={{margin: 0}}>Saved Videos</h1>
            </TitleRow>
            <p>Total Videos Saved: {savedList.length}</p>
          </TitleRow>
          <RenderSavedItem />
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default SavedVideos
