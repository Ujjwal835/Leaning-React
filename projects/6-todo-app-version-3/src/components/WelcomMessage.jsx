import styles from './WelcomeMessage.module.css'
export default function WelcomMessage() {
    return (
        <div className={styles.textContainer}>

            <p className={styles.textStyle}>Enjoy Your Day</p>
            <p className={styles.textStyle}>You Dont Have Any Pending Task</p>
        </div>

    )
}
