import { instance } from "."
import { API_KEY } from "../constans"
import { IArtist } from "../redux/artist/contracts";

export const fetchArtist = async (param: string, by: string): Promise<{ artist: IArtist }> => {
  const { data } = await instance.get(`/?method=artist.getinfo&${by}=${param}&api_key=${API_KEY}&format=json`)
  return data
}
