import MathJax from 'react-mathjax'

export default function Block({text}) {
    return (
        <MathJax.Node block formula={text}/>
    )
}