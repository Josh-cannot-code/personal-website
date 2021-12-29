import styles from "/styles/footer.module.css"
import Link from "next/link";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.links}>

                <Link href={"/"}>
                    <a>Home</a>
                </Link>

                <Link href={"/#projects"}>
                    <a>Projects</a>
                </Link>

                <Link href={"/resume"}>
                    <a>Resume</a>
                </Link>
            </div>
            j.dallacqua1@gmail.com
        </div>
    )
}