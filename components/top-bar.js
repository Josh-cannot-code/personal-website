import Link from "next/link";
import styles from "../styles/top-bar.module.css"

export default function TopBar() {
    return (
        <div className={styles.items}>
            <Link href={'/'}>
                <a>
                    <div className={styles.link}>Home</div>
                </a>
            </Link>
            <Link href={"/about"}>
                <a href={''}>
                    <div className={styles.link}>About</div>
                </a>
            </Link>
            <a href={'https://github.com/Josh-cannot-code'}>
                <div className={styles.link}>GitHub</div>
            </a>

            <a href={'https://www.linkedin.com/in/joshua-dall-acqua-2a9226227/'}>
                <div className={styles.link}>LinkedIn</div>
            </a>
            <Link href={"/resume"}>
                <a href={''}>
                    <div className={styles.link}>Resume</div>
                </a>
            </Link>
        </div>
    );
}