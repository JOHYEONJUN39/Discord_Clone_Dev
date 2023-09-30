import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';

function App() {

  const user = useAppSelector((state : any) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if(authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }));
      }
      else {
        dispatch(logout());
      }
    })
  }, [dispatch])
  

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
