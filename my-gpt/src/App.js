import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { Title, DescriptText } from './components/CommonsStyles';
import SearchBar from './components/SearchBar';
import { useState } from 'react';

function App() {
  const [searchText, setSearchText] = useState('');

  const handleChangeSearchText = (ev) => {
    setSearchText(ev.target.value);
  }

  const handleClickSearchIcon = () => {
    console.log(searchText);
  }

  return (
    <AppContainer>
      <Header>
        <Title>My AI 트레이너</Title>
      </Header>
      <Contents>
        Contents
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
`

const Contents = styled.div`
  padding: 60px 0px 0px 0px;
  flex: 1;
  overflow-y: scroll;
`

const Footer = styled.div`
  height: 86px;
`