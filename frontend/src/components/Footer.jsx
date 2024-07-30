import { NavLink } from "react-router-dom"
import styles from '../styles/Footer.module.css'
import tiktokIcon from '../assets/tiktok-icon-96.png'
import instagramIcon from '../assets/instagram-icon-96.png'
import twitterIcon from '../assets/twitter-icon-96.png'

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li>
          <a href="https://tiktok.com/" target="_blank">
            <img src={tiktokIcon} className={styles.icon} alt="tiktok icon"></img>
          </a>
          <a href="https://instagram.com/" target="_blank">
            <img src={instagramIcon} className={styles.icon} alt="instagram icon"></img>
          </a>
          <a href="https://twitter.com/" target="_blank">
          <img src={twitterIcon} className={styles.icon} alt="twitter icon"></img>
          </a>
        </li>
      </ul>
      <aside className={styles.subscribe}>
        <p>Subscribe to our newsletter:</p>
        <form>
          <input type='text' placeholder="email"></input>
          <input type='submit' value="Join"></input>
        </form>

      </aside>
    </nav>
  )
}