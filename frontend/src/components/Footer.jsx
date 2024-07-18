import { NavLink } from "react-router-dom"
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <nav className={styles.footer}>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <aside className={styles.subscribe}>
        <input type='text' placeholder="email"></input>
      </aside>
    </nav>
  )
}