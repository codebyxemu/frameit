import styles from './Hero.module.css'
import '../globals.css'

export function HeroSection() {
    return (
        <main>
            <section className={styles.hero}>
                <section className={styles.heroText}>
                    <p className='text-lg text-center text-gray-300'>Get discovered out there</p>
                    <p className='text-xl text-center'>Share your work with the world! ⭐</p>
                    <p className='text-lg text-center'>Host and Share your Images, Videos and Texts.</p>
                </section>
            </section>
        </main>


    )
}