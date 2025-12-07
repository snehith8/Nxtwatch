import styled from 'styled-components'

export const LoginBgContainer = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.themed ? '#181818' : '#f9f9f9')};
`
export const LoginContainer = styled.div`
  padding: 3%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  height: 80vh;
  box-shadow: 10px 10px 10px ${props => (props.themed ? '#000000' : '#ebebeb')};
  background-color: ${props => (props.themed ? '#000000' : '#ebebeb')};
  color: ${props => (!props.themed ? '#000000' : '#f1f1f1')};
`
export const Label = styled.label`
  color: ${props => (!props.themed ? '#000000' : '#f1f1f1')};
  margin: 2% 0%;
  font-weight: bold;
`
export const Input = styled.input`
  padding: 1%;
  color: #64748b;
  background-color: #f1f1f1;
  border: 1px solid #e2e8f0;
  width: 50vw;
`
export const Button = styled.button`
  margin: 2%;
  padding: 1%;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 20px;
  border: none;
`
export const Form = styled.form`
  padding: 5%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Error = styled.p`
  color: #ff0000;
`
export const ShowPasswordContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
export const HeaderContainer = styled.div`
  padding: 1%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.themed ? '#181818' : '#f9f9f9')};
`
export const LogoutButton = styled.button`
  border: 1px solid #4f46e5;
  color: ${props => (props.themed ? '#f1f1f1' : '#4f46e5')};
  background-color: transparent;
  padding: 2%;
`
export const SideContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13vw;
  list-style-type: none;
  padding: 0%;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
`
export const LeftHeaderContainer = styled.div`
  width: 12vw;
  height: 84vh;
  padding: 1%;
  padding-bottom: 0%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (props.themed ? '#000000' : '#f1f1f1')};
  color: ${props => (!props.themed ? '#000000' : '#f1f1f1')};
`
export const LeftContainer = styled.div`
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10vw;
  padding: 1%;
`
export const ButtonPara = styled.p`
  color: ${props => (!props.themed ? '#000000' : '#f1f1f1')};
`
export const RightContainer = styled.div`
  background-color: ${props => (props.themed ? '#181818' : '#d7dfe9')};
  color: ${props => (!props.themed ? '#000000' : '#f1f1f1')};
  width: 88vw;
  max-height: 84vh;
  overflow-y: auto;
`
export const MainContainer = styled.div`
  display: flex;
`
export const CrossButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 1%;
  font-weight: bold;
`
export const GetButton = styled.button`
  border: 1px solid #4f46e5;
  color: #4f46e5;
  background-color: transparent;
  padding: 1% 2%;
`
export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  background-position: center;
  width: 88vw;
  padding: 1%;
`
export const SearchInput = styled.input`
  padding: 1%;
  border 1px solid #616e7c;
  color: #64748b;
  background-color: #ffffff;
  width: 30vw;
`
export const SearchButton = styled.button`
  padding: 1%;
  border: 1px solid #616e7c;
  background-color: #cccccc;
`
export const SearchContainer = styled.div`
  display: flex;
  padding: 1%;
`
export const UnorderList = styled.ul`
  list-style: none;
  padding: 1%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`
export const UnorderListColumn = styled.ul`
  list-style: none;
  padding: 0% 4%;
`
export const List = styled.li`
  width: 27vw;
  height: 'fit-content';
  display: flex;
  flex-direction: column;
  border: 1px solid #616e7c;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`
export const ListRow = styled.li`
  display: flex;
  gap: 20px;
  margin: 4% 0%;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding-top: 3%;
`
export const TitleRow = styled.div`
  padding-left: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background-color: ${props => (!props.themed ? '#f9f9f9' : '#0f0f0f')};
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`
export const Columned = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const WatchingPara = styled.p`
  color: #475569;
  margin: 0%;
  padding: 0%;
`
export const Para = styled.p`
  margin: 0%;
  padding: 0%;
  margin-top: 5%;
  display: flex;
  align-items: center;
`
export const Para2 = styled.p`
  margin: 0%;
  padding: 0%;
  margin-top: 2%;
`
export const VideoConainer = styled.div`
  padding: 2%;
`
export const VideoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding-top: 1%;
`
export const VideoRowDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
  padding-top: 1%;
`
export const VideoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding-top: 1%;
`
export const ControlButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  gap: 5px;
`
