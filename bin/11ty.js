#!/usr/bin/env node

console.log('Yay 11ty!');

const { spawn } = require('child_process');

let watcher = spawn('npm', ['run-script', 'serve']);

watcher.stdout.on('data', (data) => {
	console.log(`${data}`);
});
