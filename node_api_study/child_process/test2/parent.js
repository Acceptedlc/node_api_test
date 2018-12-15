var spawn = require('child_process').spawn;

let child = spawn('node', [`${__dirname}/child.js`], {
  stdio: ['ignore', 'inherit', 'ignore', 'ipc'],
  detached: true,
  cwd: __dirname
});

child.on('exit', function() {
  console.log("child die");
})

setTimeout(() => console.log("i am die"), 1000 * 3600);

// child.send("叫爸爸");

// child.on("message", function(data) {
//   console.log(data);
// });

// setTimeout(() => console.log("sfdsfsdf"), 1000 * 10000);