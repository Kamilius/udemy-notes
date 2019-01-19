console.log('Starting notes.js');

const fs = require('fs');

const fetchNotes = () => {
	let notesString = '';

	try {
		notesString = fs.readFileSync('notes-data.json');
	} catch (err) {
		notesString = '[]';
	}

	return JSON.parse(notesString);
}

const addNote = (title, body) => {
	const notes = fetchNotes();
	let note = {
		title,
		body,
	};

	const duplicateNotes = notes.filter((n) => n.title === title);

	if (duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes, null, 2));
	}
};

const getAll = () => {
	console.log(`Getting all notes`);
};

const readNote = (title) => {
	console.log(`Reading note: ${title}`);
};

const removeNote = (title) => {
	console.log(`Removing note: ${title}`);
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote,
};
