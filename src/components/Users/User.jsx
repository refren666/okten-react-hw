const User = ({ user, setSelectedUser }) => {
  const { id, name } = user;

  return (
    <div>
      <h2>ID: {id}</h2>
      <h4>Name: {name}</h4>

      <button onClick={() => setSelectedUser(user)}>Show details</button>
    </div>
  );
};

export default User