import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import CreateReply from './pages/CreateReply';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

/*
  react-router-dom
  react로 생성된 SPA 내부에서 페이지 이동이 가능하도록 만들어주는 라이브러리

  BrowserRouter
  history API를 이용해서 history객체를 생성한다.
  라이팅을 진행할 컴포넌트 상위에 BrowserRouter컴포넌트를 생성하고 감싸주어야한다.

  Routes
  모든 Route의 상위 경로에 존재해야 하며, location 변경시 하위에 있는 모든 Route를 조회해서
  현재 location과 맞는 Route를 찾아준다.

  Route
  현재 브라우저의 location(window.href.location 정보를 가져온다)
*/
function App() {
  const [reply, setReply] = useState([
    { id: 1, writer: "admin", reply: "안녕하세요.", reply_date: "2023-01-01" },
    { id: 2, writer: "jiwon", reply: "반갑습니다.", reply_date: "2023-02-03" },
    { id: 3, writer: "user01", reply: "잘가요.", reply_date: "2023-04-05" }
  ])

  const [newReply, setNewReply] = useState({
    id: '',
    writer: "",
    reply: "",
    reply_date: ""
  });

  // 조건에 부합하는 요소는 그대로 두고 부합하지 않는 요소(return false인것)은 
  // 제외한 새로운 배열 반환
  //
  // let tmp = [1,2,3,4,5];
  // tmp.filter(number => {
  //  return number % 2 ==0;
  // })
  const handleDelectReply = (id) => {
    // 넘겨받은 id와 같은 id를 가진 요소를 제외한 새로운 배열을 생성
    const updateReplyList = reply.filter(r => r.id != id);
    setReply(updateReplyList);
  }

  const handleAddReply = () => {
    const isCheckId = reply.some((r) => String(r.id) === newReply.id); //some()하나라도 트루라면 트루반환
    console.log()
    if(isCheckId){
      alert('이미 존재하는 아이디입니다.');
      setNewReply({...newReply, 'id' : ''})
      return;
    }

    setReply([
      ...reply,
      newReply,
    ])
    setNewReply({
      id: '',
      writer: "",
      reply: "",
      reply_date: ""
    })
  }

  const handleInputChange = (ev) => {
    const {value, name} = ev.target;
    
    setNewReply({
      ...newReply,
      [name] : value
    })
  }

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to='/'>댓글목록</Link>
            </li>
            <li>
              <Link to='/create'>댓글작성하기</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home reply={reply} onDelectReply={handleDelectReply} />} />
          <Route path='/create' 
              element={<CreateReply newReply={newReply} 
              onInputChange={handleInputChange} 
              onAddReply={handleAddReply}/>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
