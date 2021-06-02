import { Fragment } from 'react';
import Header from '../src/components/Header';
import Auth from '../src/components/Auth';
import UserProfile from './components/UserProfile';

import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector(state=> state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
    </Fragment>
  );
}

export default App;
