export interface IArtistState {
  artist: IArtist | null,
  loading: boolean,
  error: string | null
}

export interface IArtist {
  name: string,
  mbid: string,
  url: string,
  streamable: number,
  stats: {
    listeners: number,
    plays: number
  }
  similar: {
    artist: {
      name: string,
      url: string
    }
  }
  tags: {
    tag: {
      name: string,
      url: string
    }[]
  }
  bio: {
    published: string,
    summary: string,
    content: string
  },
  image: {
    size: string,
    '#text': string
  }[]
}
