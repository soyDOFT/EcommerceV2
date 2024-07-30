import styles from '../styles/Contact.module.css'
import phoneIcon from '../assets/phone-icon.svg'
import emailIcon from '../assets/email-icon.svg'
import addressIcon from '../assets/address-icon.svg'

export default function Contact() {
  return (
    <section className={styles.container}>
      <form className={styles.form} name="contact-form" onSubmit="return validateContactForm()" method="post"
                action="thankyou.html">
                <section className={styles.coloredHeader}>
                    <p>CONTACT FORM</p>
                </section>
                <section className={styles.fname}>
                    <label htmlFor="fname" className={styles.label}>First Name</label>
                    <input id="fname" className={styles.input} type="text" name="firstname"/>
                </section>
                <section className={styles.lname}>
                    <label htmlFor="lname" className={styles.label}>Last Name</label>
                    <input id="lname" className={styles.input} type="text" name="lastname"/>
                </section>
                <section className={styles.message}>
                    <label htmlFor="msg" className={styles.label}>Message</label>
                    <textarea id={styles.msg} className={styles.input} name="message" maxLength='300' minLength='10'></textarea>
                </section>
                <input className={styles.submit} type="submit" value="Submit"/>
                <section className={styles.info}>
                    <p><img src={phoneIcon} alt="phone icon"></img>(704) 971-2300</p>
                    <p><img src={emailIcon} alt="email icon"></img>doft@outlook.com</p>
                    <p><img src={addressIcon} alt="address icon"></img>1101 Red Ventures Dr, Fort Mill, SC 29707</p>
                </section>
            </form>
    </section>
  )
}
