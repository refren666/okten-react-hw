import { useEffect, useState } from "react"

import { usersService } from '../services/users.service';
import { User } from "./User";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await usersService.getAll();
      setUsers(response);
    })()
  }, []);

  return (
    users?.map(user => <User key={user.id} user={user} />)
  )
}
