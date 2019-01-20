const fs = require('fs');
const _ = require('lodash');

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json');

		return JSON.parse(notesString);
	} catch (err) {
		return [];
	}
}

function writeIntoFile(notes) {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes, null, 2));
}

function renderNote(note, isLast = false) {
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);

	if (!isLast) {
		console.log(`--------`);
	}
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

		writeIntoFile(notes);

		return note;
	}
};

const getAll = () => {
	const notes = fetchNotes();

	notes.forEach((note, index) => {
		const isLast = index === notes.length - 1;

		renderNote(note, isLast);
	});
};

const readNote = (title) => {
	const notes = fetchNotes();
	const note = _.find(notes, (note) => note.title === title);

	if (note) {
		renderNote(note, true);
	} else {
		console.log(`No notes found with title: ${title}`);
	}
};

const removeNote = (title) => {
	let notes = fetchNotes()
	let filteredNotes = notes.filter((note) => note.title !== title);

	writeIntoFile(filteredNotes);

	return notes.length !== filteredNotes.length;
};

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote,
};
