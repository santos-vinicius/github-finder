import { type UserProps } from 'types/user';
const User = ({
  login,
  avatar_url,
  followers,
  following,
  location,
}: UserProps) => {
  return (
    <div>
      <img src={avatar_url} alt={login} />
      <h1>{login}</h1>
      {location != null && <p>{location}</p>}
      <div>
        <div>
          <p>Seguidores:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Seguindo:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
