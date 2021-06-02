import classes from './UserProfile.module.css';
import { useSelector } from 'react-redux';

const UserProfile = () => {
  const authEmail = useSelector(state=> state.auth.email);
  const authPassword = useSelector(state=> state.auth.password);

  return (
    <main className={classes.profile}>
      <h2>My User Profile</h2>
      <p>Email: { authEmail }</p>
      <p>Password: { authPassword }</p>
    </main>
  );
};

export default UserProfile;
