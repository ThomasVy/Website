import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import Card from '@material-ui/core/Card';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import ResumePDF from './pdfs/Resume.pdf';

export default function Resume() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    useEffect(() => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    function download() {
        const link = document.createElement("a");
        link.download = ResumePDF;
        link.href = ResumePDF;
        link.click();
    }

    function nextPage() {
        if( pageNumber === numPages) return;
        setPageNumber(pageNumber => pageNumber + 1);
    }

    function prevPage() {
        if( pageNumber === 1) return;
        setPageNumber(pageNumber => pageNumber - 1);
    }

    return (
      <>
        <h2>Resume</h2>
        <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GetAppIcon />}
            onClick={download}
        >
            Download
        </Button>
        <Card>
            <Document
            file={ResumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <IconButton aria-label="prev" disabled={pageNumber === 1} color="primary" onClick={prevPage}>
                    <NavigateBeforeIcon />
                </IconButton>
                Page {pageNumber} of {numPages}
                <IconButton aria-label="next" disabled={pageNumber === numPages} color="primary" onClick={nextPage}>
                    <NavigateNextIcon />
                </IconButton>
            </div>
        </Card>
      </>
    );
}
  