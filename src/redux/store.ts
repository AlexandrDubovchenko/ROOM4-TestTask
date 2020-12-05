import { combineReducers, createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { artistReducer } from './artist/reducer';
import { tracksReducer } from './tracks/reduces';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  artist: artistReducer
})

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

let store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
