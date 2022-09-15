const fs = require('fs')

const myFileWriter = async (fileName, fileContent) => {
	fs.writeFileSync(fileName,fileContent,(err) => {
		if(err) throw err;
		console.log("File has been saved!");
	});
}

const myFileReader = async (fileName) => {
	let data = fs.readFileSync(fileName,{encoding:'utf8', flag:'r'},(err) => {
		if(err) throw err;		
		})
		data = data + '\n';
		console.log(data.toString());
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
myFileReader('File.txt');
myFileUpdater('File.txt',' World');
myFileDeleter('File.txt');


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }