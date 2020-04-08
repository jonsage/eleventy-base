#!/usr/bin/env node

const { spawn, exec } = require('child_process');
const cwd = process.cwd();

console.log('cwd', cwd);

// exec('npx @11ty/eleventy --serve', {cwd: __dirname}, (err, stdout, stderr) => {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log('bin', stdout);
// 	const binFolder = /^(.+)[\r\n]*/g.exec(stdout)[1];
// 	const targetFolder = path.join(process.cwd(), process.argv[2]);
// 	const jscodeshift = path.join(binFolder, 'jscodeshift');
// 	console.log('jscodeshift', jscodeshift, 'targetFolder', targetFolder);
// 	exec(jscodeshift + ' -t ./node_modules/react-codemod/transforms/React-PropTypes-to-prop-types.js ' + targetFolder, {cwd: __dirname}, (err, stdout, stderr) => {
// 	if (err) {
// 	console.error(err);
// 	} else {
// 	console.log(stdout);
// 	}
// 	});
// 	}
// });

let watcher = spawn('npx @11ty/eleventy --serve');

watcher.stdout.on('data', (data) => {
	console.log(`${data}`);
});
