import { useState, type KeyboardEvent } from 'react';

import { Search as SearchIcon } from 'lucide-react';

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
    <div className="m-2 flex w-4/5 flex-col items-center justify-center">
      <h2 className="font-medium text-zinc-600">
        Busque por um usuário:
      </h2>
      <div className="m-4 flex w-4/5 items-center justify-center">
        <input
          type="text"
          placeholder="Digite o nome do usuário..."
          className="w-3/5 rounded-md p-2 text-zinc-600 focus:outline-none lg:w-2/5"
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
        <button
          className="ml-2 rounded-md bg-indigo-700 p-2"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/promise-function-async
          onClick={() => loadUser(userName)}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}

export default Search;
