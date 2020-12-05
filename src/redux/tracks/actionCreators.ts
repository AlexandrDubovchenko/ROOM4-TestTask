import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { fetchSearched, fetchTracks } from "../../api/tracks";
import { appStateType } from "../store";
import { ITrack } from "./contracts";

export enum TracksActionTypes {
  SET_TRACKS = 'tracks/SET_TRACKS',
  SET_SEARCHED = 'tracks/SET_SEARCHED'
}

export interface ISetTracks extends Action<TracksActionTypes> {
  type: TracksActionTypes.SET_TRACKS,
  payload: ITrack[]
}
export interface ISetSearched extends Action<TracksActionTypes> {
  type: TracksActionTypes.SET_SEARCHED,
  payload: ITrack[]
}

export const setTracks = (payload: ITrack[]): ISetTracks => ({
  type: TracksActionTypes.SET_TRACKS,
  payload
})
export const setSearched = (payload: ITrack[]): ISetSearched => ({
  type: TracksActionTypes.SET_SEARCHED,
  payload
})

export const getTracks = (): ThunkAction<void, appStateType, unknown, Action<string>> => async dispatch => {
  const { tracks: { track } }: { tracks: { track: ITrack[] } } = await fetchTracks()
  dispatch(
    setTracks(track)
  )
}
export const getSearched = (name: string): ThunkAction<void, appStateType, unknown, Action<string>> => async dispatch => {
  const { results: { trackmatches: { track } }}: { results: { trackmatches: { track: ITrack[]} } } = await fetchSearched(name)
  dispatch(
    setSearched(track)
  )
}

export type TracksActions = ISetTracks | ISetSearched
