#!/usr/bin/env node

const { spawn } = require('child_process');

// spawn('npx', ['@11ty/eleventy', '--serve'], {stdio: [process.stdin, process.stdout, process.stderr]});
spawn('npm', ['run-script', 'serve'], {stdio: [process.stdin, process.stdout, process.stderr]});
