import { markerContentInterface } from '../../assets/markers'
import style from './infoWindowContent.module.scss'

interface InfoWindowContentPropsInterface {
  markerContent: markerContentInterface
}

function InfoWindowContent(props: InfoWindowContentPropsInterface) {
  const { markerContent } = props
  const { title, image, description, url } = markerContent
  return (
    <div className={style.infoWindow}>
      <img src={image} className={style.infoWindow__image} alt="" />
      <div className={style.infoWindow__content}>
        <h2 className={style.infoWindow__title}>{title}</h2>
        <p className={style.infoWindow__description}>{description}</p>
      </div>
      <a
        href={url}
        rel="noreferrer"
        target="_blank"
        className={style.infoWindow__url}
      >
        <button className={style.infoWindow__btn}>Website</button>
      </a>
    </div>
  )
}

export default InfoWindowContent
