#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const cwd = process.cwd();

console.log('cwd', cwd);

exec('npx @11ty/eleventy --serve');

// let watcher = spawn('npm', ['run-script', 'serve'], { cwd });

// watcher.stdout.on('data', (data) => {
// 	console.log(`${data}`);
// });
