import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";
import html2canvas from "html2canvas";
import jsPDF from "jspdf"

function App() {
  
  // const downloadpdf=()=>{
  //   const capture=document.querySelector('.receipt')
  //   html2canvas(capture, { scale: 5 }).then((canvas)=>{
  //     const imgData=canvas.toDataURL('img/png')
  //     const doc=new jsPDF('p','mm','a4')
  //     const compowidth=doc.internal.pageSize.getWidth();
  //     const compoheight=doc.internal.pageSize.getHeight();
  //     doc.addImage(imgData, 'JPEG', 0, 0, compowidth, compoheight);
  //     doc.save('receipt.pdf')

  //   })

  // }





  const downloadpdf = () => {
    const capture = document.querySelector('.receipt');
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg'); // Use 'image/jpeg' format
      const { width, height } = canvas; // Get the width and height of the captured content
      const doc = new jsPDF({
        orientation: width > height ? 'l' : 'p', // Choose landscape or portrait based on content dimensions
        unit: 'px', // Set unit to pixels
        format: [width, height], // Set PDF page size to match content dimensions
      });
      doc.addImage(imgData, 'JPEG', 0, 0, width, height); // Add the captured image to the PDF
      doc.save('receipt.pdf');
    });
  };

  // const downloadpdf = () => {
  //   const capture = document.querySelector('.receipt');
  
  //   html2canvas(capture, { scale: window.devicePixelRatio }).then((canvas) => {
  //     const imgData = canvas.toDataURL('image/jpeg');
  //     const { width, height } = canvas;
  
  //     const pdf = new jsPDF({
  //       orientation: width > height ? 'l' : 'p',
  //       unit: 'px',
  //       format: [width, height],
  //     });
  
  //     const contentHeight = doc.getTextDimensions('Sample Content').h; // Adjust this based on your actual content
  //     const pageHeight = pdf.internal.pageSize.getHeight();
  //     let startY = 0;
  
  //     while (startY < height) {
  //       let newCanvasHeight = Math.min(contentHeight, height - startY);
  //       const newCanvas = document.createElement('canvas');
  //       newCanvas.width = width;
  //       newCanvas.height = newCanvasHeight;
  
  //       const context = newCanvas.getContext('2d');
  //       context.drawImage(canvas, 0, startY, width, newCanvasHeight, 0, 0, width, newCanvasHeight);
  
  //       const imgDataPage = newCanvas.toDataURL('image/jpeg');
  //       pdf.addImage(imgDataPage, 'JPEG', 0, startY, width, newCanvasHeight);
  
  //       startY += newCanvasHeight;
  
  //       if (startY < height) {
  //         pdf.addPage([width, height]);
  //       }
  //     }
  
  //     pdf.save('receipt.pdf');
  //   });
  // };
  
  



  

  return (
    <>
    <div className=" w-1/2 mx-auto">
    <div className="receipt">
        <div className="  my-10 border-2 border-black p-4 ">
          <div className=" flex justify-between">
          <img src="pict.jpeg" alt="" />
          <img src="acm.png" alt="" />

          </div>
          
          <Component />
         
          <div>
          <div >
          <img src="approve.webp" alt="" width={200}/>
        </div>
          </div>
        </div>
       
      </div>
      <div className=" flex justify-center">
        <button className=" bg-blue-600 rounded-md p-3 text-white font-bold " onClick={downloadpdf}>Download</button>
      </div>
    </div>
    
      
    </>
  );
}

export default App;
