import { instance } from "."
import { API_KEY } from "../constans";
import { ITrack } from "../redux/tracks/contracts";

export const fetchTracks = async (): Promise<{ tracks: { track: ITrack[] } }> => {
  const { data } = await instance.get(`/?method=chart.gettoptracks&api_key=${API_KEY}&format=json&limit=10`)
  return data
}
export const fetchSearched = async (name: string): Promise<{ results: { trackmatches: { track: ITrack[] } } }> => {
  const { data } = await instance.get(`/?method=track.search&track=${name}&api_key=${API_KEY}&format=json&limit=10`)
  return data
}
