import utilStyles from "../styles/utils.module.css"
import styles from "../components/layout.module.css"
import Link from "next/link"


export default function Custom404() {
    return (

        <div className={styles.container}>
            <h1 className={utilStyles.headingXl}>Hoppsan, den här sidan finns inte!</h1>
            <p className={utilStyles.headingMd}>Klicka på länken nedan för att komma tillbaka till startsidan.</p>
            <Link href="/">Till startsidan</Link>
        </div>
    );
}