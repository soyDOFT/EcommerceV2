import Hero from "../components/Hero"
import styles from "../styles/Home.module.css"
import mercuryImage from "../assets/prebuilts/Nightfall.webp"
import flamingoImage from "../assets/prebuilts/flamingo.png"
import laptopImage from "../assets/laptop-product-image.webp"
import desktopImage from "../assets/desktop-product-image.webp"
import accessoryImage from "../assets/accessory-product-image.webp"
import abstractVideo from "../assets/abstract-video.mp4"
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
          <div className={styles.short}>
          <img className={styles.desktopImg} src={desktopImage} alt="desktop products page"></img>
            <p>Desktops</p>
            <p></p>
          </div>
          <div className={styles.short}>
            <img className={styles.laptopImg} src={laptopImage} alt="laptop products page"></img>
            <p>Laptops</p>
            <p></p>
          </div>
          <div className={styles.short}>
            <img className={styles.accessoryImg} src={accessoryImage} alt="accessory products page"></img>
            <p>Accessories</p>
            <p></p>
          </div>
        </section>
      </div>
    </>
  )
}
