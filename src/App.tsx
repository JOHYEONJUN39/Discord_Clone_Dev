import './App.scss';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from './utils/ErrorFallBack';

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
            <ErrorBoundary FallbackComponent={ErrorFallback} >
              
              <Sidebar />
            </ErrorBoundary>
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
