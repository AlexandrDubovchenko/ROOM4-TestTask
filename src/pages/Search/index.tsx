import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { appStateType } from '../../redux/store'
import { getSearched, setSearched } from '../../redux/tracks/actionCreators'
import { debounce } from '../../utils'
import styles from './styles.module.css'

export const Search = () => {
  const [trackName, setTrackName] = useState('')
  const dispatch = useDispatch()

  const handler = useCallback(debounce((trackName: string) => {
    dispatch(getSearched(trackName))
  }, 1000), []);

  useEffect(() => {
    if (trackName) {
      handler(trackName)
    } else {
      dispatch(setSearched([]))
    }
  }, [trackName, dispatch, handler])
  const searchedList = useSelector((state: appStateType) => state.tracks.search)

  return (
    <div className={styles.container}>
      <div>
        <input placeholder="Enter track name" className={styles.input} onChange={(e: ChangeEvent<HTMLInputElement>) => setTrackName(e.currentTarget.value)} value={trackName} type="text" />
      </div>
      <ul className={styles.list}>
        <li style={{
          marginBottom: 50
        }} className={styles.listItem}><div><span>Track Name</span></div><div><span>Artist</span></div></li>
        {searchedList.map((track, i) => (
          <li className={styles.listItem} key={i}><div><span>{track.name}</span></div><div><span>{track.artist}</span></div></li>
        ))}
      </ul>
    </div>
  )
}
