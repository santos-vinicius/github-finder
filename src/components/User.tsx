import { MapPin, Twitter } from 'lucide-react';
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
    <div className="mx-8 my-1 flex flex-col items-center justify-center rounded-2xl bg-zinc-900 px-6 py-8 text-zinc-100">
      <img
        src={avatar_url}
        alt={login}
        className="mb-4 w-40 rounded-full border-4 border-orange-600"
      />
      <div className="mb-2 text-center">
        <p className="text-xl font-bold">{name}</p>
        <h1 className="text-zinc-400">{login}</h1>
      </div>
      <div className="mb-1 text-justify">
        <p className="text-sm">{bio}</p>
      </div>
      <div className="flex space-x-3">
        {location != null && (
          <div className="my-1 flex items-center space-x-1">
            <MapPin
              size={18}
              className=" bg-zinc- text-zinc-400"
            />
            <p className="text-sm">{location}</p>
          </div>
        )}

        {twitter_username != null && (
          <div className="my-1 flex items-center space-x-1">
            <Twitter size={18} className="text-zinc-400" />
            <p className="text-sm">
              <span className="text-zinc-500">@</span>
              {twitter_username}
            </p>
          </div>
        )}
      </div>

      <div className="mx-1 flex space-x-1 p-3 text-center">
        <div className="rounded-lg p-2 hover:bg-zinc-800">
          <p className="text-lg font-bold text-orange-600">
            {followers}
          </p>
          <p className="text-sm hover:font-semibold">
            Seguidores
          </p>
        </div>
        <div className="rounded-lg p-2 hover:bg-zinc-800">
          <p className="text-lg font-bold text-orange-600">
            {following}
          </p>
          <p className="text-sm hover:font-semibold">
            Seguindo
          </p>
        </div>
        <div className="rounded-lg p-2 hover:bg-zinc-800">
          <a
            href={`https://github.com/${login}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
          >
            <p className="text-lg font-bold text-orange-600">
              {public_repos}
            </p>
            <p className="text-sm hover:font-semibold">
              Repositórios
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default User;
