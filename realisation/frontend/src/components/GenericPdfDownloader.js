import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button } from '@mui/material';

const GenericPdfDownloader = ({rootElementId , downloadFileName}) => {

    const downloadPdfDocument = () => {
        const input = document.getElementById(rootElementId);
    //     const content = document.getElementById(rootElementId);

      
    // const doc = new jsPDF();
    // doc.html(content, {
    //     callback: function (doc) {
    //         doc.save('sample.pdf');
    //     },
    //     // change the scale to whatever number you need
    // });
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4");

                let width = pdf.internal.pageSize.getWidth();
                let height = pdf.internal.pageSize.getHeight();
                console.log(height)
                pdf.addImage(imgData, 'PNG', 0, 0, width, height- 50);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <Button size='large' variant="contained" onClick={downloadPdfDocument}>Download PDF Now</Button>

}

export default GenericPdfDownloader;