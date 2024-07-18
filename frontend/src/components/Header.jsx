import { NavLink } from "react-router-dom"
import styles from "./Header.module.css"
import logo from '../assets/logo.png'
import cartIcon from '../assets/shopping_cart.svg'

export default function Header() {
    return (
      <nav className={styles.nav}>
        <ul>
          <li><img className={styles.logo} src={logo} alt="DOFT logo"></img></li>
          <div className={styles.vert}></div>
          <li><NavLink to="/about">ABOUT</NavLink></li>
          <li><NavLink to="/help">HELP</NavLink></li>
        </ul>
        <ul>
          <li><NavLink to="/">HOME</NavLink></li>
          <li><NavLink to="/products">PRODUCTS</NavLink></li>
          <li><NavLink to="/contact">CONTACT</NavLink></li>
          <div className={styles.vert}></div>
          <li><NavLink to="/login">LOGIN</NavLink></li>
          <div className={styles.vert}></div>
          <li className={styles.cartBtn}><img src={cartIcon} alt="shopping cart button"></img></li>
        </ul>
      </nav>
    )
  }