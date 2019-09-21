
if (! process.argv[2]) {
	console.log('restlint <swagger-file>');
	console.log('      OR');
	console.log('restlint <csv-file-paths> <csv-file-params> <csv-file-status> <csv-file-errors>');
	return;
}

const fs = require('fs');

let contents = fs.readFileSync(process.argv[2], 'utf8');
let jsdata = JSON.parse(contents);

for (let x of jsdata.skills) {
    console.log('### ' +x.name);
    console.log(x.keywords.map(y => ('`'+y+'`')).join(' ') );
}