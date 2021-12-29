import * as PDFJS from 'pdfjs-dist/build/pdf';
PDFJS.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${PDFJS.version}/pdf.worker.min.js`;

export default function Resume() {
    return (
        <div>
            <embed src="/resume.pdf" width="100%" height="2100px" />
        </div>
    )
}