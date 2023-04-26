/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';

import { type UserProps } from 'types/user';

import Error from 'components/Error';
import Footer from 'components/Footer';
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
      login,
      name,
      avatar_url,
      followers,
      following,
      location,
      bio,
      public_repos,
      twitter_username,
    } = data;

    const userData: UserProps = {
      login,
      name,
      avatar_url,
      followers,
      following,
      location,
      bio,
      public_repos,
      twitter_username,
    };

    setUser(userData);
  };

  return (
    <main>
      <div className="flex h-screen flex-col items-center justify-center">
        <Search loadUser={loadUser} />
        {user != null && <User {...user} />}
        {error && <Error />}
        <Footer />
      </div>
    </main>
  );
}
