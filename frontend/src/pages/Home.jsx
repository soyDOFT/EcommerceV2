import Hero from "../components/Hero"
import styles from "./Home.module.css"
import laptopImage from "../assets/laptop-product-image.webp"
import desktopImage from "../assets/desktop-product-image.webp"
export default function Home() {
  return (
    <>
      <Hero />
      <div className={styles.container}>
        <section>
          <div className={styles.special}>
            <img src="" alt=""></img>
            <p>Limited Edition</p>
            <p>Themed, Limited Quanity Builds</p>
          </div>
          <div className={styles.long}>
            <img src="" alt=""></img>
            <p>Liquid Mercury Series</p>
            <p>Our Premium Prebuilts, Ships Same Day</p>
          </div>
        </section>
        <section>
          <div className={styles.short}>
          <img className={styles.img} src={desktopImage} alt="desktop products page"></img>
            <p>Desktops</p>
            <p></p>
          </div>
          <div className={styles.short}>
            <img className={styles.img} src={laptopImage} alt="laptop products page"></img>
            <p>Laptops</p>
            <p></p>
          </div>
          <div className={styles.short}>
            <img src="" alt=""></img>
            <p>Accessories</p>
            <p></p>
          </div>
        </section>
      </div>
    </>
  )
}
