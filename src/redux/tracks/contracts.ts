export interface ITracksState {
  tracks: ITrack[],
  search: ITrack[],
  loading: boolean,
  error: string | null
}

export interface ITrack {
  name: string,
  duration: string,
  image: {
    '#text': string,
    size: string
  }[]
  playcount: number,
  listeners: number,
  mbid: string,
  url: string,
  streamable: {
    fulltrack: string,
    '#text': string
  }
  artist: {
    name: string,
    mbid: string,
    url: string
  }
}
