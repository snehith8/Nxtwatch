import {useState, useContext} from 'react'
import {IoSearchSharp} from 'react-icons/io5'
import Api from './Api'
import Header from './Header'
import LeftHeader from './LeftHeader'
import {RenderHomeSuccess} from './Success'
import {ThemeContext} from './Context'
import {
  RightContainer,
  MainContainer,
  GetButton,
  CrossButton,
  BannerContainer,
  SearchInput,
  SearchButton,
  SearchContainer,
} from './StyledComponents'

const Home = () => {
  const [close, setClose] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const {theme} = useContext(ThemeContext)
  const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`

  const closeBanner = () => {
    setClose(true)
  }

  const inputChange = e => {
    setSearchInput(e.target.value)
  }

  const apiresponse = () => (
    <Api
      url={url}
      debounce={500}
      success={data => {
        const videos = data.videos || []
        return <RenderHomeSuccess list={videos} />
      }}
    />
  )

  return (
    <>
      <Header />
      <MainContainer>
        <LeftHeader />
        <RightContainer themed={theme}>
          {!close && (
            <BannerContainer>
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt watch logo"
                />
                <p style={{color: '#181818'}}>Buy Nxt Watch Premium</p>
                <GetButton type="button">GET IT NOW</GetButton>
              </div>
              <CrossButton type="button" onClick={closeBanner}>
                X
              </CrossButton>
            </BannerContainer>
          )}
          <>
            <SearchContainer>
              <SearchInput
                type="search"
                value={searchInput}
                onChange={inputChange}
                placeholder="search"
              />
              <SearchButton
                type="button"
                onClick={() => {
                  apiresponse()
                }}
              >
                <IoSearchSharp />
              </SearchButton>
            </SearchContainer>
            {apiresponse()}
          </>
        </RightContainer>
      </MainContainer>
    </>
  )
}

export default Home
