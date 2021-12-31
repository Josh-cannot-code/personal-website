import styles from "../styles/index.module.css"
import Link from "next/link";

export default function Home() {
  return (
      <div className={styles.root}>
          <div className={styles.body}>
              <div className={styles.name}>
                  Joshua <br /> Dall'Acqua
              </div>
              <div className={styles.description}>
                  <p className={styles.text1}>
                      I am an aspiring software developer studying maths and computer science at McGill University.
                      I have an affinity for problem solving and am always looking for a new challenge. I am
                      aiming to gain experience in the tech industry, more specifically in software development,
                      data science, or computer science.


                  </p>
              </div>
              <div className={styles.projectsTitle} id="projects">
                  My Projects
              </div>
              <hr className={styles.hr}/>
              <div className={`${styles.projectTitle} ${styles.project1Title}`}>
                  "Square Wave Fractal" in Rust
              </div>
              <div className={styles.project1}>
                  <p className={styles.text}>
                      This project is based on a gift I received a few years ago made by
                      <a href={'https://kinetrika.com/'}> <u>Kinetrika</u></a>. I found myself interested in
                      the geometry of the art piece and decided it might be a fun to program a 3D model
                      of it. Originally, I did this in python using the MatPlotLib plotting library but
                      felt unsatisfied with the result. A year later, I did it in Rust! I used a library
                      called Glium to hook into OpenGL and nalgebra to handle some of the maths.
                      <a href={"https://github.com/Josh-cannot-code/square-wave-rust"}> <u>Link to GitHub project</u></a>
                  </p>
                  <img src={"/rust.gif"} alt={"Image could not be loaded"} className={styles.gif}/>
              </div>
              <div className={`${styles.projectTitle} ${styles.project2Title}`}>
                  Raspberry Pi Personal Server
              </div>
              <div className={styles.project2}>
                  <p className={styles.text}>
                      For information about the frontend of the website see <Link href={'/about'}>
                      <a><u>about</u>.</a>
                  </Link>
                      The first project on the Raspberry Pi was a samba network share. I quickly
                      realized that I would need to access my files from networks outside my home. My
                      first thought was to make the share public but it turns out that this is actually a
                      very bad idea. The solution ended up being a WireGuard VPN. Setting this
                      up gave me the confidence to host my own website. <br/> <br/>

                      In hindsight, it is a bad idea to host a website yourself. The goal was to
                      save money on hosting but in the end hosting locally was far more of an investment.
                      That being said, I did have fun figuring out how to get everything running.
                      PM2 to manages the part of the site running serverside and
                      Nginx adds a little bit of safety with the reverse proxy. The site itself is on
                      the Next.js framework.
                      <a href={"https://github.com/Josh-cannot-code/personal-websiteu"}> <u>Link to GitHub project</u></a>
                  </p>
              </div>
              <div className={`${styles.projectTitle} ${styles.project3Title}`}>
                  Connections Between Proofs in Math and Computer Algorithms
              </div>
              <div className={styles.project3}>
                  <p className={styles.text}>
                      My degree aims to give students an extensive background
                      in both maths and computer science. The intuitive relationship is that
                      math can simplify topics in computer science.
                      Overwhelmingly, this is true case. But occasionally there will be a
                      step in a proof that feels identical to an algorithm from computer science.
                      Knowing that algorithm not only makes the proof easier to
                      understand, but it also gives insight into the behavior
                      of the theorem. Currently, I am attempting to write articles about some
                      of these connections. The first one, which will hopefully be
                      posted soon, explores a connection between the proof that the set of
                      rational numbers is uncountable and the algorithm for a breadth first
                      traversal on a graph.

                  </p>
              </div>
          </div>
      </div>
  )
}
