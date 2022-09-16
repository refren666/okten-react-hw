const UserFull = ({ user }) => {
  const userInfo = [];

  const recursivelyFlattenObjectIntoArray = (obj) => {
    for (let key in obj) {
      if (typeof obj[key] === 'object') {
        recursivelyFlattenObjectIntoArray(obj[key]);
      } else {
        userInfo.push({ key, value: obj[key] });
      }
    }
  };

  recursivelyFlattenObjectIntoArray(user);

  return (
    <div>
      {userInfo.map((item, idx) => (
        <p key={idx}>{item.key}: {item.value}</p>
      ))}
    </div>
  );
};

export default UserFull;
