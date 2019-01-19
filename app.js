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
		notes.addNote(argv.title, argv.body);
		break;

	case 'remove':
		notes.removeNote(argv.title);
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
