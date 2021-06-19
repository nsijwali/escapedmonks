// import React, { useState } from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

// const SpotsLoader = ({ file }) => {
// 	const [numPages, setNumPages] = useState(null);
// 	const [pageNumber, setPageNumber] = useState(1);

// 	function onDocumentLoadSuccess({ numPages }) {
// 		setNumPages(numPages);
// 	}

// 	return (
// 		<div>
// 			<Document
// 				file={file}
// 				onLoadSuccess={onDocumentLoadSuccess}
// 				onLoadError={(e) =>
// 					console.log('Error while loading document! ' + e.message)
// 				}
// 				onSourceError={(e) =>
// 					console.log('Error while loading document! ' + e.message)
// 				}
// 			>
// 				<Page pageNumber={pageNumber} />
// 			</Document>
// 			<p>
// 				Page {pageNumber} of {numPages}
// 			</p>
// 		</div>
// 	);
// };

// export default SpotsLoader;
