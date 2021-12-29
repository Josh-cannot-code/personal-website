import styles from './layout.module.css'
import TopBar from "./top-bar";

export default function Layout({children}) {
    return (
            <div className={styles.container}>
                <TopBar />
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        )
}