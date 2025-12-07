import {useState, useContext, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {ThemeContext} from './Context'
import {
  LoginBgContainer,
  LoginContainer,
  Label,
  Input,
  Form,
  Button,
  Error,
  ShowPasswordContainer,
} from './StyledComponents'

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [checkboxValue, setCheckboxValue] = useState(false)
  const [error, setError] = useState('')
  const history = useHistory()
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    if (Cookies.get('jwt_token') !== undefined) {
      history.replace('/')
    }
  }, [history])

  const getHome = data => {
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    history.replace('/')
  }

  const getUsername = e => {
    setUsernameInput(e.target.value)
  }
  const getPassword = e => {
    setPasswordInput(e.target.value)
  }
  const getCheckbox = () => {
    setCheckboxValue(prev => !prev)
  }

  const getApi = async e => {
    e.preventDefault()
    if (passwordInput === '' || usernameInput === '') {
      setError('Username or password is invalid')
    } else {
      const userDetails = {username: usernameInput, password: passwordInput}
      const url = 'https://apis.ccbp.in/login'
      const option = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(url, option)
      const data = await response.json()
      if (response.ok) {
        getHome(data)
      } else {
        setError(data.error_msg)
      }
    }
  }

  return (
    <LoginBgContainer themed={theme}>
      <LoginContainer themed={theme}>
        <img
          src={
            !theme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          }
          alt="website logo"
        />
        <Form onSubmit={getApi}>
          <Label themed={theme} htmlFor="username">
            USERNAME
          </Label>
          <Input
            id="username"
            type="text"
            value={usernameInput}
            onChange={getUsername}
          />
          <Label themed={theme} htmlFor="password">
            PASSWORD
          </Label>
          <Input
            id="password"
            type={checkboxValue ? 'text' : 'password'}
            value={passwordInput}
            onChange={getPassword}
          />
          <ShowPasswordContainer>
            <input
              type="checkbox"
              id="checkbox"
              value={checkboxValue}
              onChange={getCheckbox}
            />
            <Label themed={theme} htmlFor="checkbox">
              SHOW PASSWORD
            </Label>
          </ShowPasswordContainer>
          <Button type="submit">Login</Button>
          {error && <Error>*{error}</Error>}
        </Form>
      </LoginContainer>
      <br />
      <p>
        Note:
        <span>
          {} Use the credentials username 'rahul' and password 'rahul@2021' this
          is a frontend-only project. For the best UI experience, it is
          recommended to open the project on a PC.
        </span>
      </p>
    </LoginBgContainer>
  )
}
export default Login
