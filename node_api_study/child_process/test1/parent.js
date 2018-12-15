var spawn = require('child_process').spawn;

let child = spawn('node', [`${__dirname}/child.js`], {
  stdio: ['ignore', 'ignore', 'ignore'],
  detached: true,
  cwd: __dirname
});

process.on('exit', function() {
  console.log("")
})


// child.send("叫爸爸");

// child.on("message", function(data) {
//   console.log(data);
// });

// setTimeout(() => console.log("sfdsfsdf"), 1000 * 10000);