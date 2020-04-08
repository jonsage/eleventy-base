#!/usr/bin/env node

const { spawn, exec } = require('child_process');

let watcher = spawn('npx', ['@11ty/eleventy', '--serve'], {stdio: [process.stdin, process.stdout, process.stderr]});

// watcher.stdout.on('data', data => {
// 	console.log(data.toString());
// });
