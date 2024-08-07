import { Link } from 'react-router-dom';
import Hero from "../components/Hero"
import styles from "../styles/Home.module.css"
import mercuryImage from "../assets/prebuilts/Nightfall.webp"
import flamingoImage from "../assets/prebuilts/flamingo.png"
import laptopImage from "../assets/laptop-product-image.webp"
import desktopImage from "../assets/desktop-product-image.webp"
import accessoryImage from "../assets/accessory-product-image.webp"
import abstractVideo from "../assets/abstract-video.mp4"
import { swiffyslider } from 'swiffy-slider';
window.swiffyslider = swiffyslider;
window.addEventListener("load", () => window.swiffyslider.init());
import "swiffy-slider/css";

export default function Home() {
  return (
    <>
      <Hero video={abstractVideo} lead={'PREBUILT PCs'} description={'Artisan built custom computer systems'} button={'SHOP'}/>
      <div className={styles.container}>
        <section>
          <div className={styles.special}>
            <img className={styles.mercuryImg} src={mercuryImage} alt="Liquid Mercury Series PC"></img>
            <p>Liquid Mercury Series</p>
            <p>Our Premium Prebuilts, Ships Same Day</p>
          </div>
          <div className={styles.long}>
            <img className={styles.flamingoImg} src={flamingoImage} alt=""></img>
            <p>Limited Edition</p>
            <p>Themed, Limited Quantity Builds</p>
          </div>
        </section>
        <section>
          <Link to='/products'>
            <div className={styles.short}>
            <img className={styles.desktopImg} src={desktopImage} alt="desktop products page"></img>
              <p>Desktops</p>
              <p></p>
            </div>
          </Link>
          <Link to='/products'>
          <div className={styles.short}>
            <img className={styles.laptopImg} src={laptopImage} alt="laptop products page"></img>
            <p>Laptops</p>
            <p></p>
          </div>
          </Link>
          <Link to='/products'>
            <div className={styles.short}>
              <img className={styles.accessoryImg} src={accessoryImage} alt="accessory products page"></img>
              <p>Accessories</p>
              <p></p>
            </div>
          </Link>
        </section>
        <div className={styles.slider}>
          <div className="swiffy-slider">
              <ul className="slider-container">
                  <li><img src="\prebuilts\sweetdreams.webp" style={{maxWidth: '100%',height: 'auto'}}/></li>
                  <li><img src="\prebuilts\horizon2.webp" style={{maxWidth: '100%',height: 'auto'}}/></li>
                  <li><img src="laptops\acer-predatorhelios16.png" style={{maxWidth: '100%',height: 'auto'}}/></li>
              </ul>

              <button type="button" className="slider-nav"></button>
              <button type="button" className="slider-nav slider-nav-next"></button>

              <div className="slider-indicators">
                  <button className="active"></button>
                  <button></button>
                  <button></button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
