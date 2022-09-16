import { useEffect, useState } from 'react';

import User from './User';
import UserFull from './UserFull';
import { screens } from '../../const/screens';
import { usersService } from '../../services/users.service';
import styles from './Users.module.css';

const Users = ({ handleScreenChange }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    usersService.getAll().then((res) => setUsers(res));
  }, []);

  if (users.length === 0) return <h2>LOADING...</h2>;

  return (
    <div className={styles.wrapper}>
      <div>
        <button onClick={() => handleScreenChange(screens.CHOOSE_SCREEN)}>
          Go back
        </button>

        {users?.map((user) => (
          <User key={user.id} user={user} setSelectedUser={setSelectedUser} />
        ))}
      </div>

      {selectedUser && <UserFull user={selectedUser} />}
    </div>
  );
};

export default Users;
