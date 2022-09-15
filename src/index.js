const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	// fs.mkdir('node',function(){
	// 	fs.writeFileSync('./node/File.txt',"Hello");
	// });
	fs.writeFile('File.txt',"Hello",(err) => {
		if(err) throw err;
		console.log("File has been saved!");
	});
}
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
}
const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	fs.unlink('File.txt',(err) => {
		if(err) throw err;
		console.log('File.txt was deleted');
	});
}
myFileWriter();
// myFileReader();
// myFileUpdater();
myFileDeleter();


module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }