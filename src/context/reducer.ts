import { types } from './constants';

export interface IFavorite {
  id: number;
  url: string;
  name: string;
  login: string;
  forks: number;
  stars: number;
  issues: number;
  rating: number;
  watchers: number;
  description: string;
}

export interface IReposInitState {
  favoriteRepos: Array<IFavorite>;
}

interface IReposAction {
  type: string;
  payload: any;
}

const reducer = (
  state: IReposInitState,
  action: IReposAction
): IReposInitState => {
  switch (action.type) {
    case types.SET_FAVORITE:
      if (state.favoriteRepos.some((repo) => repo.id === action.payload.id)) {
        return state;
      }
      return {
        ...state,
        favoriteRepos: [
          ...state.favoriteRepos,
          { ...action.payload, rating: 0 },
        ],
      };
    case types.SET_RATING:
      return {
        ...state,
        favoriteRepos: state.favoriteRepos.map((repo) => {
          if (repo.id === action.payload.id) {
            return {
              ...repo,
              rating: action.payload.rating,
            };
          }
          return repo;
        }),
      };
    case types.DELETE_FAVORITE:
      return {
        ...state,
        favoriteRepos: state.favoriteRepos.filter(
          (repo) => repo.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default reducer;
