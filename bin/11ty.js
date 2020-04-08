#!/usr/bin/env node

const { spawn } = require('child_process');
const cwd = process.cwd();

console.log('cwd', cwd);

let watcher = spawn('npm', ['run-script', 'serve'], { cwd });

watcher.stdout.on('data', (data) => {
	console.log(`${data}`);
});
