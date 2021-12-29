import styles from "../styles/index.module.css"

export default function Home() {
  return (
      <div className={styles.root}>
          <div className={styles.body}>
              <div className={styles.name}>
                  Joshua <br /> Dall'Acqua
              </div>
              <div className={styles.description}>
                  <p className={styles.text1}>
                      I am a student at McGill University studying maths and computer science. I love to solve
                      problems. If you feel as if you have too many problems, consider hiring me to solve them.

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
                      called Glium to hook into OpenGL and another linear algebra library to avoid having
                      to define matrix multiplication myself.
                      <a href={"https://github.com/Josh-cannot-code/square-wave-rust"}> <u>Link to GitHub project</u></a>
                  </p>
                  <img src={"/rust.gif"} alt={"Image could not be loaded"} className={styles.gif}/>
              </div>
              <div className={`${styles.projectTitle} ${styles.project2Title}`}>
                  Raspberry Pi Personal Server
              </div>
              <div className={styles.project2}>
                  <p className={styles.text}>
                      The first Thing I got setup on the Raspberry Pi was a samba network share. I quickly
                      realized that I would need to access my files from networks other than my home. My
                      first thought was to make the share public but it turns out that this is actually a
                      very bad idea. The solution ended up being a simple WireGuard VPN. I had so much fun
                      setting that up, I decided to host my own website.

                      In hindsight, it is a bad idea to host a website yourself. I thought I was
                      so smart because I would be saving money on hosting, however; immediately
                      after the website posted, I realized I would still have to pay for a domain name.
                      With all that said I had way too much fun figuring out how to get everything running.
                      I ended up going with PM2 to manage the part of the site running serverside and
                      Nginx to add a little bit of safety with the reverse proxy. The site itself is on
                      the Next.js framework.
                      <a href={"https://github.com/Josh-cannot-code/personal-websiteu"}> <u>Link to GitHub project</u></a>
                  </p>
              </div>
              <div className={`${styles.projectTitle} ${styles.project3Title}`}>
                  Connections Between Proofs in Math and Computer Algorithms
              </div>
              <div className={styles.project3}>
                  <p className={styles.text}>
                      The degree I'm enrolled in aims to give students an extensive background
                      in both maths and computer science. The intuitive relationship here is that
                      math helps make topics in computer science easier to understand. And
                      overwhelmingly, this is the case. But once in a while there will be some
                      step in a proof that feels identical to an algorithm from computer science.
                      This simplifies the proof greatly and gives good insight into the behavior
                      of the theorem. Currently, I am attempting to write articles about some
                      of these connections I have seen. The first one, which will hopefully be
                      posted soon, explores a connection between the proof that the set of
                      rational numbers is uncountable and the algorithm for a breadth first
                      traversal on a graph.

                  </p>
              </div>
          </div>
      </div>
  )
}
