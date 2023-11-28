import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Title, DescriptText } from './components/CommonsStyles';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';
import { CallGpt, CallGptAxios } from './service/gpt';
import ChatDisplay from './components/ChatDisplay';

function App() {
  // 프롬프트창에 입력되는 text데이터
  const [searchText, setSearchText] = useState('');
  // gpt로부터 요청한 message와 응답 message를저장하는 arr
  const [chatDataList, setChatDataList] = useState(localStorage.getItem("myChatList") ?
                                         JSON.parse(localStorage.getItem("myChatList")) : []);

  const [isLoading, setIsLoading] = useState(false);

  const handleChangeSearchText = (ev) => {
    setSearchText(ev.target.value);
  }

  const handleClickSearchIcon = async () => {
    const chatData = {
      date : new Date(),
      question: searchText,
    }

    // gpt에게 searchText정보 전송
    try{
      setIsLoading(true);
      const message = await CallGptAxios({
        prompt : `${searchText}`
      });

      chatData.message = message;

      setChatDataList([
          ...chatDataList,
          chatData
      ]);

    } catch(error){
      console.log(error);
    } finally{
      setIsLoading(false);
    }
  }

  // chatDataList의 값이 변경되면 localStorage에 저장해줘
  useEffect(() => {
    console.log(chatDataList)
    localStorage.setItem('myChatList', JSON.stringify(chatDataList));
  },[chatDataList])

  return (
    <AppContainer>
      <Header>
        <Title>나만의 GPT</Title>
      </Header>
      <Contents>
        <ChatDisplay
          chatDataList = {chatDataList}
          isLoading = {isLoading}
        />
      </Contents>
      <Footer>
        <SearchBar 
          searchText = {searchText}
          onChangeSearchText={handleChangeSearchText}
          onClickSearchIcon = {handleClickSearchIcon}
        />
        <DescriptText>
          ChatGPT can make mistakes. Consider checkingimportant information.
        </DescriptText>
      </Footer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
`

const Header = styled.div`
  padding: 8px;
  height: 56px;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 1;
  background: white;
  opacity: 0.5;
`

const Contents = styled.div`
  padding: 60px 0px 0px 0px;
  flex: 1;
  overflow-y: scroll;
  &&::-webkit-scrollbar{
    display:none;
  }
  
`


const Footer = styled.div`
  height: 86px;
  display: flex;
  flex-direction: column;
`