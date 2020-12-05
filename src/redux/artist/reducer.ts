import { ArtistActions, ArtistActionTypes } from "./actionCreators";
import { IArtistState } from "./contracts";

const initialState: IArtistState = {
  artist: null,
  loading: false,
  error: null
}

export const artistReducer = (state = initialState, action: ArtistActions): IArtistState => {
  switch (action.type) {
    case ArtistActionTypes.SET_ARTIST:
      return {...state, artist: action.payload}
    default:
      return state;
  }
}
