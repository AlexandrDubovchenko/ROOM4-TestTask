import { TracksActions, TracksActionTypes } from "./actionCreators";
import { ITracksState } from "./contracts";

const initialState: ITracksState = {
  tracks: [],
  search: [],
  loading: false,
  error: null
}

export const tracksReducer = (state = initialState, action: TracksActions): ITracksState => {
  switch (action.type) {
    case TracksActionTypes.SET_TRACKS:
      return { ...state, tracks: action.payload }
    case TracksActionTypes.SET_SEARCHED:
      return { ...state, search: action.payload }
    default:
      return state;
  }
}
