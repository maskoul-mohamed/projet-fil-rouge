import React from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
                pdf.addImage(imgData, 'PNG', 0, 0, width, height);
                pdf.save(`${downloadFileName}.pdf`);
            })
    }

    return <button onClick={downloadPdfDocument}>Download Pdf</button>

}

export default GenericPdfDownloader;