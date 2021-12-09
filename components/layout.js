import styles from './layout.module.css'
import Sidebar from "./sidebar";
export default function Layout({children}) {
    return (
            <div className={styles.container}>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.body}>
                    {children}
                </div>
            </div>
        )
}