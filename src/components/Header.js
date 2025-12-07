import {useContext, useState} from 'react'
import {useHistory, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {IoSunnyOutline} from 'react-icons/io5'
import {FaMoon} from 'react-icons/fa'
import Popup from 'reactjs-popup'
import {ThemeContext} from './Context'
import {
  HeaderContainer,
  SideContainer,
  LogoutButton,
  ThemeButton,
  Button,
} from './StyledComponents'
import 'reactjs-popup/dist/index.css'

const Header = () => {
  const {theme, changeTheme} = useContext(ThemeContext)
  const [isOpen, setIsOpen] = useState(false)
  const history = useHistory()
  const jwtToken = Cookies.get('jwt_token')

  if (jwtToken === undefined) {
    history.replace('/login')
  }

  const logout = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <HeaderContainer themed={theme}>
        <Link to="/">
          <img
            src={
              theme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
        </Link>
        <SideContainer>
          <li key="theme">
            <ThemeButton type="button" onClick={changeTheme}>
              {theme ? <IoSunnyOutline color="white" /> : <FaMoon />}
            </ThemeButton>
          </li>
          <li key="profile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              width={25}
              height={25}
            />
          </li>
          <li key="button">
            <LogoutButton
              type="button"
              themed={theme}
              onClick={() => setIsOpen(true)}
            >
              Logout
            </LogoutButton>
          </li>
        </SideContainer>
      </HeaderContainer>
      <Popup
        modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="popup-content"
      >
        {close => (
          <>
            <div>
              <p>Are you sure, you want to logout</p>
            </div>
            <LogoutButton type="button" onClick={() => close()}>
              Cancel
            </LogoutButton>

            <Button
              type="button"
              className="trigger-button"
              onClick={() => {
                logout()
                close()
              }}
            >
              Confirm
            </Button>
          </>
        )}
      </Popup>
    </>
  )
}

export default Header
