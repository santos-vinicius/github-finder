import { type UserProps } from 'types/user';
const User = ({
  login,
  name,
  avatar_url,
  followers,
  following,
  location,
  bio,
  public_repos,
  twitter_username,
}: UserProps) => {
  return (
    <div className="m-2 flex flex-col items-center justify-center rounded-2xl bg-zinc-800 p-8">
      <img
        src={avatar_url}
        alt={login}
        className="mb-4 w-40 rounded-full border-4 border-sky-400"
      />
      <div className="flex items-center justify-center">
        <h1 className="text-lg font-bold">{login}</h1>
        <span className="mx-3 text-zinc-700">|</span>
        <p>{name}</p>
      </div>
      <div>
        <p>{bio}</p>
      </div>
      {location != null && <p>{location}</p>}
      <div className="flex space-x-24">
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
