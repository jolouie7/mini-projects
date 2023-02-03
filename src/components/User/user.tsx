const User = ({ user }) => {
  return (
    <div className="card-detail" key={user.id}>
      <img src={user.picture.large} alt="" />
      <h3>
        {user.name.first}
        {user.name.last}
      </h3>
    </div>
  );
};

export default User;
