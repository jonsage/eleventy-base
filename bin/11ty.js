#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');

// spawn('npx', ['@11ty/eleventy', '--serve'], {stdio: [process.stdin, process.stdout, process.stderr]});
spawn('npm', ['run', 'serve'], {cwd: path.join(__dirname, '..'), stdio: [process.stdin, process.stdout, process.stderr]});
