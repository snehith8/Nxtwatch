import {useContext} from 'react'
import {ThemeContext} from './Context'
import {Columned} from './StyledComponents'

const RenderFailure = ({onRetry}) => {
  const {theme} = useContext(ThemeContext)
  const getClicked = () => {
    if (onRetry) {
      onRetry()
    }
  }
  return (
    <Columned>
      <img
        src={
          theme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        }
        alt="failure view"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble completing your request, Please try again
      </p>
      <button type="button" onClick={getClicked}>
        Retry
      </button>
    </Columned>
  )
}
export default RenderFailure
