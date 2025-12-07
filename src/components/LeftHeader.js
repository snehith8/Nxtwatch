import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {IoHome, IoSave} from 'react-icons/io5'
import {HiTrendingUp} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {ThemeContext} from './Context'
import {
  LeftHeaderContainer,
  LeftContainer,
  ContactContainer,
  ButtonPara,
} from './StyledComponents'

const LeftHeader = () => {
  const {theme} = useContext(ThemeContext)

  return (
    <LeftHeaderContainer themed={theme}>
      <LeftContainer>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <IoHome color={theme ? 'white' : 'gray'} />
          <ButtonPara themed={theme}>Home</ButtonPara>
        </Link>
        <Link
          to="/trending"
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <HiTrendingUp color={theme ? 'white' : 'gray'} />
          <ButtonPara themed={theme}>Trending</ButtonPara>
        </Link>
        <Link
          to="/gaming"
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <SiYoutubegaming color={theme ? 'white' : 'gray'} />
          <ButtonPara themed={theme}>Gaming</ButtonPara>
        </Link>
        <Link
          to="/saved-videos"
          style={{
            textDecoration: 'none',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '10px',
          }}
        >
          <IoSave color={theme ? 'white' : 'gray'} />
          <ButtonPara themed={theme}>Saved Videos</ButtonPara>
        </Link>
      </LeftContainer>
      <LeftContainer>
        <p color={!theme ? '#000000' : '#f1f1f1'}>CONTACT US</p>
        <ContactContainer>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
            alt="facebook logo"
            width={30}
            height={30}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
            alt="twitter logo"
            width={30}
            height={30}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
            alt="linked in logo"
            width={30}
            height={30}
          />
        </ContactContainer>
        <p color={!theme ? '#000000' : '#f1f1f1'}>
          Enjoy! Now to see your channels and recommendations!
        </p>
      </LeftContainer>
    </LeftHeaderContainer>
  )
}
export default LeftHeader
