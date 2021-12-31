import styles from "/styles/about.module.css"
export default function About() {
    return (
        <div className={styles.root}>
            <div className={styles.title}>
                About The Site
            </div>
            <div className={styles.text}>
                This site is built on the Next.js framework. There are a few
                reasons for this, but the main one is ease of use. This is my
                first website and has been my intro to web development. Next.js
                made it very easy to get up and running. All of the frontend
                code has been written from scratch. No template was used aside
                from the blank project template from Next.js. All the content
                is currently static but I plan on implementing some interactive
                demos soon. Thanks for visiting!
            </div>
        </div>
    )
}