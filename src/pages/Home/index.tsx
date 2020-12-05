import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TrackCard } from '../../components/TrackCard'
import { appStateType } from '../../redux/store'
import { getTracks } from '../../redux/tracks/actionCreators'
import styles from './styles.module.css'

export const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTracks())
  }, [dispatch])
  const tracks = useSelector(((state: appStateType) => state.tracks.tracks))

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {tracks.map((track, i) => (
          <li key={i} className={styles.listItem}>
            <TrackCard title={track.name} artist={track.artist} img={track.image.find(img => img.size === "medium")?.["#text"]} />
          </li>
        ))}
      </ul>
    </div>
  )
}
