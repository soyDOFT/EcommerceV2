import { NavLink } from 'react-router-dom'
import styles from '../styles/Hero.module.css'

export default function Hero({video, lead, description, button}) {
    return (
        <div className={styles.container}>
            <video className={styles.background} autoPlay muted loop>
                <source src={video} type="video/mp4" />
                Youre browser does not support videos
            </video>
            <div className={styles.headline}>
                <p className={styles.lead}>{lead}</p>
                <p className={styles.description}>{description}</p>
                <NavLink to="/products">{button}</NavLink>
            </div>
        </div>

    )
}
