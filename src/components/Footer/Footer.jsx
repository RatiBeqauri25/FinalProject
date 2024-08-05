import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <h4>Made by Rati Beqauri</h4>
            <p>Design Inspired by <Link className={styles.link} target="_blank" href={'https://go.demo.nextjstemplates.com/#features'}>GoStartup</Link> + From lectures  </p>
        </div>
    )
}

export default Footer