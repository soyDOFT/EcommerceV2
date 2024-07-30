import { NavLink } from "react-router-dom"
import styles from "../styles/Header.module.css"
import logo from '../assets/logo.png'
import menuIcon from "../assets/menu-icon.svg"
import cartIcon from '../assets/shopping_cart.svg'
import closeIcon from '../assets/close-icon.svg'

export default function Header() {
  function menuOn() {
    const sideNavEl = document.querySelector('.' + styles.sideNav);
    sideNavEl.style.display = 'block'
  }

  function menuOff() {
    const sideNavEl = document.querySelector('.' + styles.sideNav);
    sideNavEl.style.display = 'none';
  }
  return (
    <>
      <header className={styles.nav}>
        <ul>
          <li><img className={styles.logo} src={logo} alt="DOFT logo"></img></li>
          <div className={styles.vert}></div>
          <li><NavLink to="/about" className={styles.tempLinks}>ABOUT</NavLink></li>
          <li><NavLink to="/help" className={styles.tempLinks}>HELP</NavLink></li>
        </ul>
        <img onClick={menuOn} className={styles.menu} src={menuIcon} alt="side navigation bar button"></img>
        <ul>
          <li><NavLink to="/" className={styles.tempLinks}>HOME</NavLink></li>
          <li><NavLink to="/products" className={styles.tempLinks}>PRODUCTS</NavLink></li>
          <li><NavLink to="/contact" className={styles.tempLinks}>CONTACT</NavLink></li>
          <div className={styles.vert}></div>
          <li><NavLink to="/login">LOGIN</NavLink></li>
          <div className={styles.vert}></div>
          <li className={styles.cartBtn}><img src={cartIcon} alt="shopping cart button"></img></li>
        </ul>
      </header>
      <nav className={styles.sideNav}>
        <div className={styles.ribbon}><img onClick={menuOff} src={closeIcon} alt="close menu button"></img> </div>
        <ul className={styles.sideNavbar}>
            <li><NavLink onClick={menuOff} to="/">HOME</NavLink></li>
            <li><NavLink onClick={menuOff} to="/about">ABOUT</NavLink></li>
            <li><NavLink onClick={menuOff} to="/products">PRODUCTS</NavLink></li>
            <li><NavLink onClick={menuOff} to="/contact">CONTACT</NavLink></li>
            <li><NavLink onClick={menuOff} className={styles.sideLogin} to="/login">LOGIN</NavLink></li>
        </ul>
      </nav>
    </>
  )
}