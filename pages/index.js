import Head from 'next/head'
import Link from "next/link";
import styles from "../styles/index.module.css"

//TODO: MathCs Numbers
//TODO: Square Fractal
//TODO: CSS

//colors:
//#FFAA3C
//#4A4F74
//#FA9A94
//#FFCC7C

export default function Home() {
    const mathcs = () => {
        return (
        <Link href="projects/math-cs">
        </Link>
        )
    }
  return (
      <>
          <Head>
              <title>Joshua Dall'Acqua</title>
              <link rel="icon" href="/public/header.png" />
          </Head>
          <div className={styles.container}>
              <div className={styles.title}>
                  <h1>This is Joshua Dall'Acqua's Home Page</h1>
                  <h2>The site is currently under construction</h2>
                  <hr></hr>
              </div>
              <table className={styles.table}>
                  <tr>
                  <td><div className={styles.github}>
                      <a className={styles.button} href="https://github.com/Josh-cannot-code">
                          <div className={styles.center}>
                              Github
                          </div>
                      </a>
                  </div></td>
                  <td><div className={styles.linkedin}>
                      <a className={styles.button} href="https://www.linkedin.com/in/joshua-dall-acqua-2a9226227">
                          <div className={styles.center}>
                              LinkedIn
                          </div>
                      </a>
                  </div></td>
                  </tr>
                <tr>
                  <td><div className={styles.mathcs}>
                      <Link href="projects/math-cs">
                          <a className={styles.button}>
                              Connections Between<br/> Math and Computer Science
                          </a>
                      </Link>
                  </div></td>
                  </tr>
              </table>
          </div>
      </>
  )
}
