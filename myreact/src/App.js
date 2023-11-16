import logo from './logo.svg';
import './App.css';
import Menu from "./component/Menu";
import Clock from './component/Clock';
import CommentList from './component/CommentList';
import Notification from './component/Notification/Notification';
import NotificationList from './component/Notification/NotificationList';

function App() {
  return (
    <div className="App">
        <NotificationList/>
    </div>
  );
}

export default App;
