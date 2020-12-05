import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import { getArtist } from '../../redux/artist/actionCreators'
import { appStateType } from '../../redux/store'
import styles from './styles.module.css'

export const AboutArtist = () => {
  const { id } = useParams<{ id: string }>()
  const { state } = useLocation<{ by: string }>()
  const [isOpenText, setOpenText] = useState<boolean>(false)
  const dispatch = useDispatch()
  const artist = useSelector((state: appStateType) => state.artist.artist)
  useEffect(() => {
    dispatch(getArtist(id, state?.by || 'mbid'))
  }, [dispatch, state?.by, id])

  const description = useMemo(() => isOpenText ? artist?.bio.content : artist?.bio.content.slice(0, 400) + '...', [isOpenText, artist])

  return (
    <div className={styles.container}>
      <h2>{artist?.name}</h2>
      <img src={artist?.image?.find(img => img.size === "large")?.["#text"]} alt="" />
      <ul className={styles.tags}>
        {artist?.tags.tag.map(({ name }, i) => (
          <li key={i} className={styles.tag}>{name}</li>
        ))}
      </ul>
      <p className={styles.description}>
        {description}
      </p>
        {artist && artist?.bio.content.length > 200 && <button onClick={() => setOpenText(!isOpenText)} className={styles.readMore}>{isOpenText ? "Hide" : "Read More"}</button>}
    </div>
  )
}
