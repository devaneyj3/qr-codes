import React from "react";

import ReactToPdf from "react-to-pdf";

const PDFDownload = ({ children }) => {
  const ref = React.createRef();
  return (
    <>
      <ReactToPdf targetRef={ref} filename="info.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Capture as PDF</button>}
        {children}
      </ReactToPdf>
    </>
  );
};
export default PDFDownload;
