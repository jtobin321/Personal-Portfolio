import React from 'react';
import { Document, Page } from 'react-pdf';

import {
    Grid,
    Segment
} from 'semantic-ui-react';

import NavBar from '../../components/NavBar';

import resumePDF from '../../assets/resume/Jack-Tobin-Resume.pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
    return (
        <div>
        <NavBar />
        <Grid textAlign='center' style={{ backgroundColor: "#1b1c1d" }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 700, marginTop: "6em", marginBottom: "6em" }}>
                    <Segment>
            <Document
                file={resumePDF}
            >
                <Page pageNumber={1} />
            </Document>
            </Segment>
            </Grid.Column>
            </Grid>
        </div>
    )
}

export default Resume;