import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import RenderLoader from './Loader'
import RenderFailure from './Failure'

const Api = ({url, success, debounce = 0}) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [resultData, setResultData] = useState([])
  const jwtToken = Cookies.get('jwt_token')

  const getApi = async () => {
    setLoading(true)
    const urlfetch = url
    const option = {
      method: 'GET',
      headers: {Authorization: `Bearer ${jwtToken}`},
    }
    const response = await fetch(urlfetch, option)
    const data = await response.json()
    if (response.ok) {
      setResultData(data)
      setLoading(false)
      setError(false)
    } else {
      setError(true)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (debounce > 0) {
      const timer = setTimeout(getApi, debounce)
      return () => clearTimeout(timer)
    }
    getApi()
    return ''
    // eslint-disable-next-line
  }, [url])

  if (loading) {
    return <RenderLoader />
  }
  if (error) {
    return <RenderFailure onRetry={getApi} />
  }
  return success(resultData)
}

export default Api
