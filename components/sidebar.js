import styles from '../styles/sidebar.module.css'
import Link from "next/link";
export default function Sidebar() {
    return (
        <div>
           <ul className={styles.ul}>
               <li className={styles.li}>Another Link</li>
               <li className={styles.li}>Second Link</li>
               <li className={styles.li}>More Links</li>
               <li className={styles.li}>Better odd number</li>
               <li className={styles.li}>
                   <Link href="/"><a>Back to Home</a></Link>
               </li>
           </ul>
        </div>
    )
}