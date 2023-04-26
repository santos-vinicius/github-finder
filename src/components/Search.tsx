/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useState, type KeyboardEvent } from 'react';

import { Github, Search as SearchIcon } from 'lucide-react';

interface SearchProps {
  loadUser: (userName: string) => Promise<void>;
}

function Search({ loadUser }: SearchProps): JSX.Element {
  const [userName, setUserName] = useState('');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      loadUser(userName);
    }
  };

  return (
    <div className="my-2 flex w-full max-w-md flex-col items-center justify-center ">
      <div className="mb-2 flex items-center justify-between space-x-4">
        <div className="rounded-md bg-orange-600 p-2">
          <Github className="text-zinc-100 hover:text-orange-600" />
        </div>
        <h1 className="text-2xl font-bold uppercase tracking-wide text-zinc-900">
          GitHub Finder
        </h1>
      </div>
      <div className="mb-2 mt-3 flex w-full items-center justify-center">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          className="w-4/5 rounded-md bg-zinc-900 p-2 text-zinc-100 focus:outline-none lg:w-full"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-2 rounded-md bg-orange-600 p-2"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
          onClick={() => loadUser(userName)}
        >
          <SearchIcon className="text-zinc-100" />
        </button>
      </div>
    </div>
  );
}

export default Search;
