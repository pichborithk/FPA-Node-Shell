const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');

// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const [cmd, path] = data.toString().trim().split(' ');

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(path);
      break;
    case 'curl':
      curl(path);
      break;
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
