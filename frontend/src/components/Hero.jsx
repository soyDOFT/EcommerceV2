import video from '../assets/abstract-video.mp4'
import style from './Hero.module.css'

export default function Hero() {
    return (
        <div className={style.container}>
            <video className={style.background} autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Youre browser does not support videos
            </video>
            <div className={style.headline}>
                <p className={style.lead}>PREBUILT PCs</p>
                <p className={style.description}>Artisan built custom computer systems</p>
                <a href="/products">SHOP</a>
            </div>
        </div>

    )
}
