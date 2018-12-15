console.log("fuck");
process.on("message", function(data) {
  console.log("child recv: ", data);
  setTimeout(() => process.exit(0), 500);
})






// let read_stream = fs.createReadStream(fs_index);



// let write_stream = fs.createWriteStream(fs_index);






