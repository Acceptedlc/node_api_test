var spawn = require('child_process').spawn;

let child = spawn('node', [`${__dirname}/child.js`], {
  stdio: ['ignore', 'inherit', 'ignore', 'ipc'],
  detached: true,
  cwd: __dirname
});


child.on('exit', function() {
  console.log("child die");
})

child.send('叫爸爸');

setTimeout(() => console.log("i am die"), 1000 * 3600);
