import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchArtist } from "../../api/artist";
import { appStateType } from "../store";
import { IArtist } from "./contracts";

export enum ArtistActionTypes {
  SET_ARTIST = 'artist/SET_ARTIST'
}

export interface ISetArtist extends Action<ArtistActionTypes> {
  type: ArtistActionTypes.SET_ARTIST,
  payload: IArtist
}

export const setArtist = (payload: IArtist): ISetArtist => ({
  type: ArtistActionTypes.SET_ARTIST,
  payload
})

export const getArtist = (id: string, by: string): ThunkAction<void, appStateType, unknown, Action<string>> => async dispatch => {
  const { artist }: { artist: IArtist } = await fetchArtist(id, by)
  dispatch(
    setArtist(artist)
  )
}

export type ArtistActions = ISetArtist
