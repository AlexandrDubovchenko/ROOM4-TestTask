import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

interface ITrackCard {
  title: string,
  artist: {
    name: string,
    url: string,
    mbid: string
  },
  img?: string,
}

export const TrackCard = ({ title, artist, img }: ITrackCard): ReactElement => {

  return (
    <div className={styles.card}>
      <h3 className={styles.trackName}>{title}</h3>
      <h6 className={styles.artistName}>
        <Link to={{
          pathname: `/artist/${artist.mbid || artist.name}`,
          state: {
            by: artist.mbid ? 'mbid' : 'artist'
          }
        }}> {artist.name} </Link>
      </h6>
      {img && <img className={styles.img} src={img} alt="track" />}
      <a href={artist.url} target="_blank" rel="noopener noreferrer">Last.fm</a>
    </div>
  )
}
