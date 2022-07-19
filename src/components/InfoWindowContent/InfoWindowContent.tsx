import { markerContentInterface } from '../../assets/markers'
import style from './infoWindowContent.module.scss'

interface InfoWindowContentPropsInterface {
  markerContent: markerContentInterface
}

function InfoWindowContent(props: InfoWindowContentPropsInterface) {
  const { markerContent } = props
  const { title, icon, image, description, url } = markerContent
  return (
    <div className={style.infoWindow}>
      <image src={image} className={style.infoWindow__image} />
      <div className={style.infoWindow__content}>
        <h2 className={style.infoWindow__title}>{title}</h2>
        <p className={style.infoWindow__description}>{description}</p>
        <a href={url} target="_blank" className={style.infoWindow__url}>
          <button className={style.infoWindow__btn}>Website</button>
        </a>
      </div>
    </div>
  )
}

export default InfoWindowContent
