import JSZip from 'jszip';
const API_URL = import.meta.env.VITE_API_URL;
export const fetchBooksByCategory = async (category, page = 1, searchTerm = '') => {
	try {
		const queryParams = new URLSearchParams({
			topic: category,
			search: searchTerm,
			mime_type: 'image/',
			page,
		});

		const response = await fetch(`${API_URL}books?${queryParams}`);
		if (!response.ok) {
			throw new Error('Failed to fetch books');
		}

		const data = await response.json();
		return data;
	} catch (error) {
		console.error('Error in fetchBooksByCategory:', error);
		throw error;
	}
};

export const openBookInPreferredFormat = async (book) => {
	const formats = book.formats;

	if (formats['text/html']) {
		window.open(formats['text/html']);
	} else if (formats['application/pdf']) {
		window.open(formats['application/pdf']);
	} else if (formats['text/plain']) {
		window.open(formats['text/plain']);
	} else if (formats['application/zip']) {
		try {
			const response = await fetch(formats['application/zip']);
			const zipData = await response.arrayBuffer();
			const zip = await JSZip.loadAsync(zipData);

			const htmlFile = Object.keys(zip.files).find((file) => file.endsWith('.html'));
			const pdfFile = Object.keys(zip.files).find((file) => file.endsWith('.pdf'));
			const txtFile = Object.keys(zip.files).find((file) => file.endsWith('.txt'));

			if (htmlFile) {
				const htmlContent = await zip.file(htmlFile).async('blob');
				const htmlURL = URL.createObjectURL(htmlContent);
				window.open(htmlURL);
			} else if (pdfFile) {
				const pdfContent = await zip.file(pdfFile).async('blob');
				const pdfURL = URL.createObjectURL(pdfContent);
				window.open(pdfURL);
			} else if (txtFile) {
				const txtContent = await zip.file(txtFile).async('blob');
				const txtURL = URL.createObjectURL(txtContent);
				window.open(txtURL);
			} else {
				alert('No viewable version available in ZIP file');
			}
		} catch (error) {
			console.error('Error handling ZIP file:', error);
			alert('No viewable version available');
		}
	} else {
		alert('No viewable version available');
	}
};
