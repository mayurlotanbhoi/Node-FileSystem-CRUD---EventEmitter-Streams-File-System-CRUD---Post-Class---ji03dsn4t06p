const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent,(err) => {
		if(err) throw err;
		console.log("File has been saved!");
	});
}

const myFileReader = async (fileName) => {
	try {
	const data = await fs.readFile(fileName, { encoding: 'utf8' });
    console.log(data);
  } catch (err) {
    console.log(err);
  }
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
myFileReader("File.txt");
myFileDeleter('File.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }