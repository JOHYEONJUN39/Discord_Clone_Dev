import { useSelector } from 'react-redux';
import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';

function App() {

  // const user = useSelector((state : any) => state.user.user);
  const user = null;

  return (
    <div className="App">
      {
        user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ) : (
          <>
            <Login />
          </>
        )
      }
      
    </div>
  );
}

export default App;
