import { useState } from 'react';

import { type UserProps } from 'types/user';

import Error from 'components/Error';
import Search from 'components/Search';
import User from 'components/User';

export default function Home(): JSX.Element {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);

  const loadUser = async (userName: string) => {
    setError(false);
    setUser(null);
    const res = await fetch(
      `https://api.github.com/users/${userName}`,
    );
    const data = await res.json();

    if (res.status === 404) {
      setError(true);
      return;
    }

    const {
      avatar_url,
      login,
      location,
      followers,
      following,
    } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-2xl font-bold uppercase">
          GitHub Finder
        </h1>
        <Search loadUser={loadUser} />
        {user != null && <User {...user} />}
        {error && <Error />}
      </div>
    </main>
  );
}
