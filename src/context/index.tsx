import { FC, createContext, useReducer } from 'react';
import reducer, { IReposInitState } from './reducer';

interface IReposProviderProps {
  children: React.ReactNode;
}

const ReposContext = createContext<{
  state: IReposInitState;
  dispatch: React.Dispatch<any>;
}>({
  state: {
    favoriteRepos: [],
  },
  dispatch: () => null,
});

export const ReposProvider: FC<IReposProviderProps> = ({ children }) => {
  const initialState = {
    favoriteRepos: [],
    enableFirebase: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReposContext.Provider value={{ state, dispatch }}>
      {children}
    </ReposContext.Provider>
  );
};

export default ReposContext;
