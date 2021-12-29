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
              <div className={styles.projectsTitle}>
                  My Projects
              </div>
              <hr className={styles.hr}/>
              <div className={styles.project1Title}>
                  "Square Wave Fractal" in Rust
              </div>
              <div className={styles.project1}>
                  <p className={styles.text}>
                      This project is based on a gift I received a few years ago made by
                      <a href={'https://kinetrika.com/'}><u> Kinetrika</u></a>. I found myself interested in
                      the geometry of the art piece and decided it might be a fun to program a 3D model
                      of it. Originally, I did this in python using the MatPlotLib plotting library but
                      felt unsatisfied with the result. A year later, I did it in Rust! I used a library
                      called Glium to hook into OpenGL and another linear algebra library to avoid having
                      to define matrix multiplication myself.
                  </p>
                  <img src={"/rust.gif"} alt={"Image could not be loaded"} className={styles.gif}/>
              </div>
          </div>
      </div>
  )
}
