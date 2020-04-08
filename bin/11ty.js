#!/usr/bin/env node

console.log('Yay 11ty!', process.cwd(), __dirname));

const { spawn } = require('child_process');

let watcher = spawn('npm', ['run-script', 'serve'], {
	cwd: __dirname
});

watcher.stdout.on('data', (data) => {
	console.log(`${data}`);
});
