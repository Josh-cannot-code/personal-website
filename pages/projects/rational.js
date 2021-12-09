import MathJax from 'react-mathjax'
import styles from "../../styles/math-cs.module.css";
import Inline from "../../lib/inline";
import Block from "../../lib/block";

export default function Rational() {
    const inlineFormula = '\\frac{1}{2}'
    return (
        <>
            <h2 className={styles.section}>Introduction</h2>
            Everyone talks about how useless an undergraduate real analysis course is
            for anything outside of pure math. Generally, I would agree with this. You
            will not directly use anything from analysis outside math. That being said,
            many times I have been my in a computer science class learning something
            completely disconnected from math and think "oh yeah, this is just like that
            concept in analysis". I want to try to share some of those moments.
            <h2 className={styles.section}>A Graph Algorithm in the Proof of Countability of the Rational numbers</h2>
            <MathJax.Provider>
                <b className={styles.important}>What does it mean for something to be countable? </b><br/>
                Do you need to include this section?

                <p/><b className={styles.important}>Formal(ish) definition of countability</b><br/> Let <Inline text={'A'}/> be a set.
                We say <Inline text={'A'}/> is countable if there exists
                a injective map <Inline text={'f:A \\rightarrow \\mathbb{N}'}/>. This means
                every element in <Inline text={'A'}/> maps to an element in <Inline text={'\\mathbb{N}'}/> such
                that no two elements in <Inline text={'A'}/> map to the same thing.
                For example, if we take the set <Inline text={'\\mathbb{N}_0'}/> (set of natural numbers
                with zero added) the map we would need is simply: <Inline text={'f(n) = n+1'}/>. In this case, It is
                easy to see that no two elements in <Inline text={'\\mathbb{N}_0'}/> will map
                to the same element in <Inline text={'\\mathbb{N}'}/>. <br/>
                Assume two unique elements do map to the same value
                <Block text={'a,b \\in \\mathbb{N}_0: a \\ne b'}/>
                <Block text={'f(a) = f(b) \\implies a + 1 = b + 1 \\implies a = b'}/>
                Which as a contradiction as we assumed that <Inline text={'a \\ne b'}/>.


                <p/><b className={styles.important}>Countability of <Inline text={'\\mathbb{Q}'}/> </b> <br/>
                The same way we did with <Inline text={'\\mathbb{N}_0'}/>, we need to find a
                map <Inline text={'f:\\mathbb{Q} \\rightarrow \\mathbb{N}'}/> which is injective to
                show <Inline text={'\\mathbb{Q}'}/> is countable. With a little thought, it can be observed
                that this map will be more difficult to construct than the previous example. Our goal will be to make a
                list containing every rational number at least once. To do this, we will use a breadth first traversal of
                a graph.
                <p/><b className={styles.important}>Constructing the graph</b>
            </MathJax.Provider>
        </>
    )
}