const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFile(fileName,fileContent,(err) => {
		if(err) throw err;
		console.log("File has been saved!");
	});
}

const myFileReader = async (fileName) => {
	try {
    const data = await fs.readFile(fileName, "UTF-8");
    console.log(data);
		return data
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
// myFileWriter("File.txt","Hello");
// myFileReader('File.txt');
// myFileUpdater('File.txt',' World');
// myFileDeleter('File.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }
