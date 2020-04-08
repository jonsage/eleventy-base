#!/usr/bin/env node

const { spawn } = require('child_process');

let watcher = spawn('npm',['run','build']);

watcher.stdout.on('data', (data) => {
	console.log(`${data}`);
});
