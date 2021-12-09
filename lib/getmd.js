import {getMd} from "./posts";

export async function getStaticProps() {
    const mdPath = 'posts/rational-numbers.md'
    const md = getMd(mdPath)
    return {
        props : {
            md
        }
    }
}