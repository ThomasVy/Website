import React, { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import Card from '@material-ui/core/Card';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import ResumePDF from './pdfs/Resume.pdf';
import {useTheme} from './ThemeProvider';
import { Typography } from '@material-ui/core';

export default function Resume() {
    const theme = useTheme();
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [width, setWidth] = useState(300);

    useEffect(() => {
      pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    }, []);
  
    useEffect(() => {
        if (window.innerWidth > 950) {
            setWidth(800);
        } else {
            setWidth(window.innerWidth);
        }
    }, []);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
  
    function open() {
        const link = document.createElement("a");
        link.href = ResumePDF;
        link.target = '_blank';
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
        <Typography variant="h4" className={theme.title}>Resume</Typography>
        <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<GetAppIcon />}
            onClick={open}
            style={{marginTop: 20}}
        >
            Open in Separate Window
        </Button>
        <Card>
            <Document
            file={ResumePDF}
            onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page pageNumber={pageNumber} width={width} />
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
  