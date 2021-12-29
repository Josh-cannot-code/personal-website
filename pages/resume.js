import * as PDFJS from 'pdfjs-dist/build/pdf';
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;
import styles from "/styles/resume.module.css"

export default function Resume() {
    return (
        <div className={styles.div}>
            <embed src="/resume.pdf" width="100%" height="2000px" />
        </div>
    )
}