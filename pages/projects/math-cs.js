import Link from 'next/link'
import styles from "../../styles/math-cs.module.css";
import Layout from "../../components/layout";
import Rational from "./rational";

export default function MathCs({ rational }) {
    const inlineFormula = 'x+1'
    return (
        <>
            <h1 className={styles.title}>Connections Between Mathematical Proofs and Algorithms Within Computer Science</h1>
            <div className={styles.subtext}>At the undergraduate level</div>
            <hr className={styles.hr}/>
            <div className={styles.body}>
                <Rational />
            </div>
        </>
    )
}