import MathJax from 'react-mathjax'

export default function Inline({text}) {
    return (
        <MathJax.Node inline formula={text}/>
    )
}