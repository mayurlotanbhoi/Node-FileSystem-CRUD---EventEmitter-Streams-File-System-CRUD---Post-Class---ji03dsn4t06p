const fs = require('fs/promises')

const myFileReader = async (fileName) => {
	const data = await fs.readFile(fileName,'utf8'); 
		// if (err) throw err;
		console.log(data);
}
// myFileReader('File.txt');


const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent,(err) => {
		if(err) throw err;
		console.log("File has been saved!");
	});
}

const myFileUpdater = async (fileName, fileContent) => {
	fs.appendFile(fileName,fileContent,(err) => {
		if(err) throw err;
		console.log("file has been updated")
	})
}

const myFileDeleter = async (fileName) => {
	fs.unlink(fileName,(err) => {
		if(err) throw err;
		console.log('File.txt was deleted');
	});
}
myFileWriter("File.txt","Hello");
myFileUpdater('File.txt',' World');
myFileReader('File.txt');
myFileDeleter('File.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }