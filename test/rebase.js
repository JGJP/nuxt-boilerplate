const path = require('path');
const fs = require('fs');

const { testURL, sizes, routes, testRoot } = require('./test-config.js');

const baseDir = testRoot+"base";
const testDir = testRoot+"test";
const diffDir = testRoot+"diff";

if(fs.existsSync(baseDir) && fs.existsSync(testDir)){

	deleteContentsRecursive(baseDir);

	moveContentsRecursive(testDir, baseDir);

	fs.rmdirSync(testDir);
	fs.rmdirSync(diffDir);

} else {
	console.log('check that base and test directories exist')
}

function deleteContentsRecursive(dir) {
	if (fs.existsSync(dir)) {
		fs.readdirSync(dir).forEach( file => {
			const current = path.join(dir, file);
			if (fs.lstatSync(current).isDirectory()) {
				deleteFolderRecursive(current);
			} else {
				fs.unlinkSync(current);
			}
		});
		// fs.rmdirSync(dir);
	}
}

function moveContentsRecursive(oldDir, newDir) {
	if (fs.existsSync(oldDir) && fs.existsSync(newDir)) {
		fs.readdirSync(oldDir).forEach( file => {
			const oldFile = path.join(oldDir, file);
			const newFile = path.join(newDir, file);
			fs.renameSync(oldFile, newFile);
		})
	}
}