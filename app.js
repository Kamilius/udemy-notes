console.log('App started...');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
let command = process.argv[2];
console.log(`Command: ${command}`);

switch (command) {
	case 'add':
		const note = notes.addNote(argv.title, argv.body);

		if (note) {
			console.log('Note successfully added!');
		} else {
			console.log('Note already exists');
		}
		break;

	case 'remove':
		const removed = notes.removeNote(argv.title);

		if (removed) {
			console.log(`Note was removed.`);
		} else {
			console.log(`No note found for a given title`);
		}
		break;

	case 'read':
		notes.readNote(argv.title);
		break;

	case 'list':
		notes.getAll();
		break;

	default:
		console.log('Command not recognized');
		break;
}
