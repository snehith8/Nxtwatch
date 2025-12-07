import {formatDistanceToNow} from 'date-fns'
import {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {BsDot} from 'react-icons/bs'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillDislike,
  AiFillLike,
} from 'react-icons/ai'
import {IoIosSave} from 'react-icons/io'
import {SavedListContext} from './Context'
import {
  UnorderList,
  List,
  Row,
  Column,
  UnorderListColumn,
  ListRow,
  WatchingPara,
  Para,
  VideoConainer,
  VideoRow,
  VideoColumn,
  Columned,
  ControlButton,
  Para2,
  VideoRowDetails,
} from './StyledComponents'

export const RenderHomeSuccess = props => {
  const {list} = props
  console.log(list)
  const newVideo = list.map(each => ({
    id: each.id,
    title: each.title,
    thumbnailUrl: each.thumbnail_url,
    viewCount: each.view_count,
    publishedAt: each.published_at,
    channelName: each.channel.name,
    channelProfileImage: each.channel.profile_image_url,
  }))
  return (
    <div>
      {newVideo.length === 0 ? (
        <>
          <h1>No Search results found</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
        </>
      ) : (
        <UnorderList>
          {newVideo.map(eachitem => (
            <List key={eachitem.id}>
              <Link
                to={`/videos/${eachitem.id}`}
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <img
                  src={eachitem.thumbnailUrl}
                  alt="video thumbnail"
                  width="100%"
                  height="50%"
                />
                <Row>
                  <img
                    src={eachitem.channelProfileImage}
                    alt="channel logo"
                    width="15%"
                    height="35%"
                  />
                  <Column>
                    <Para>{eachitem.title}</Para>
                    <Para>{eachitem.channelName}</Para>
                    <Row>
                      <Para>
                        {eachitem.viewCount}
                        <span> views </span>
                      </Para>
                      <Para>
                        <BsDot />
                        {formatDistanceToNow(new Date(eachitem.publishedAt))}
                      </Para>
                    </Row>
                  </Column>
                </Row>
              </Link>
            </List>
          ))}
        </UnorderList>
      )}
    </div>
  )
}

export const RenderTrendingSuccess = props => {
  const {list} = props
  const newVideo = list.map(each => ({
    id: each.id,
    title: each.title,
    thumbnailUrl: each.thumbnail_url,
    viewCount: each.view_count,
    publishedAt: each.published_at,
    channelName: each.channel.name,
    channelProfileImage: each.channel.profile_image_url,
  }))
  return (
    <UnorderListColumn>
      {newVideo.map(eachitem => (
        <ListRow key={eachitem.id}>
          <Link
            to={`/videos/${eachitem.id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <Row>
              <img
                src={eachitem.thumbnailUrl}
                alt="video thumbnail"
                width="60%"
                height="100%"
              />
              <Column>
                <Para>{eachitem.title}</Para>
                <Para>{eachitem.channelName}</Para>
                <Row>
                  <Para>
                    {eachitem.viewCount}
                    <span> views </span>
                  </Para>
                  <Para>
                    <BsDot />
                    {formatDistanceToNow(new Date(eachitem.publishedAt))}
                  </Para>
                </Row>
              </Column>
            </Row>
          </Link>
        </ListRow>
      ))}
    </UnorderListColumn>
  )
}

export const RenderGamingSuccess = props => {
  const {list} = props
  const newVideo = list.map(each => ({
    id: each.id,
    title: each.title,
    thumbnailUrl: each.thumbnail_url,
    viewCount: each.view_count,
  }))
  return (
    <UnorderList>
      {newVideo.map(eachitem => (
        <List key={eachitem.id}>
          <Link
            to={`/videos/${eachitem.id}`}
            style={{textDecoration: 'none', color: 'inherit'}}
          >
            <img
              src={eachitem.thumbnailUrl}
              alt="video thumbnail"
              width="100%"
              height="80%"
            />
            <Para>{eachitem.title}</Para>
            <WatchingPara>
              {eachitem.viewCount}
              <span> Watching Worldwide </span>
            </WatchingPara>
          </Link>
        </List>
      ))}
    </UnorderList>
  )
}

export const RenderVedioesItem = props => {
  const {list} = props
  const videos = list

  const [like, setLike] = useState(false)
  const [dislike, setDisLike] = useState(false)
  const {savedList, changeList} = useContext(SavedListContext)

  const newVideo = {
    id: videos.id,
    title: videos.title,
    videoUrl: videos.video_url,
    thumbnailUrl: videos.thumbnail_url,
    viewCount: videos.view_count,
    publishedAt: videos.published_at,
    description: videos.description,
    channelName: videos.channel?.name || '',
    channelProfileImage: videos.channel?.profile_image_url || '',
    subscriberCount: videos.channel?.subscriber_count || '',
  }
  const isSaved = savedList.some(video => video.id === newVideo.id)
  // const dat = new Date(list.publishedAt)
  // console.log(formatDistanceToNow(dat))

  return (
    <VideoConainer>
      <ReactPlayer url={newVideo.videoUrl} controls width="100%" />
      <Para2>{newVideo.title}</Para2>
      <VideoRow>
        <VideoRow>
          <Para2>
            <span>{newVideo.viewCount} </span>
            views
          </Para2>
          <Para>
            <BsDot />
            {newVideo.publishedAt}
          </Para>
        </VideoRow>
        <VideoRow>
          <ControlButton
            type="button"
            onClick={() => {
              setLike(prev => !prev)
              if (!like) setDisLike(false)
            }}
            style={{color: like ? '#2563eb' : '#64748b'}}
          >
            {!like ? (
              <AiOutlineLike color="#64748b" />
            ) : (
              <AiFillLike color="#2563eb" />
            )}
            <p>Like</p>
          </ControlButton>
          <ControlButton
            type="button"
            onClick={() => {
              setDisLike(prev => !prev)
              if (!dislike) setLike(false)
            }}
            style={{color: dislike ? '#2563eb' : '#64748b'}}
          >
            {!dislike ? (
              <AiOutlineDislike color="#64748b" />
            ) : (
              <AiFillDislike color="#2563eb" />
            )}
            <p>Dislike</p>
          </ControlButton>
          <ControlButton
            type="button"
            onClick={() => {
              changeList(newVideo)
            }}
            style={{color: isSaved ? '#2563eb' : '#64748b'}}
          >
            <IoIosSave color={isSaved ? '#2563eb' : '#64748b'} />
            <p>Saved</p>
          </ControlButton>
        </VideoRow>
      </VideoRow>
      <hr />
      <VideoRowDetails>
        <img
          src={newVideo.channelProfileImage}
          alt="channel logo"
          width={50}
          height={50}
        />
        <VideoColumn>
          <div>
            <Para2>{newVideo.channelName}</Para2>
            <Para2>{newVideo.subscriberCount} Subcribers</Para2>
          </div>
          <Para2>{newVideo.description}</Para2>
        </VideoColumn>
      </VideoRowDetails>
    </VideoConainer>
  )
}

export const RenderSavedItem = () => {
  const {savedList} = useContext(SavedListContext)
  return (
    <div>
      {savedList.length === 0 ? (
        <Columned>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
            width="100%"
            height="100%"
          />
          <h1>No saved Videos Found</h1>
          <p>Save your videos by clicking a button</p>
        </Columned>
      ) : (
        <UnorderListColumn>
          {savedList.map(eachitem => (
            <ListRow key={eachitem.id}>
              <Link
                to={`/videos/${eachitem.id}`}
                style={{textDecoration: 'none', color: 'inherit'}}
              >
                <Row>
                  <img
                    src={eachitem.thumbnailUrl}
                    alt="video thumbnail"
                    width="250vw"
                    height="250px"
                  />
                  <Column>
                    <Para>{eachitem.title}</Para>
                    <Para>{eachitem.channelName}</Para>
                    <Row>
                      <Para>
                        {eachitem.viewCount}
                        <span> views </span>
                      </Para>
                      <Para>
                        <BsDot />
                        {formatDistanceToNow(new Date(eachitem.publishedAt))}
                      </Para>
                    </Row>
                  </Column>
                </Row>
              </Link>
            </ListRow>
          ))}
        </UnorderListColumn>
      )}
    </div>
  )
}
