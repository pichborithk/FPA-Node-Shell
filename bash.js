const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const [cmd, filepath] = data.toString().trim().split(' ');

  switch (cmd) {
    case 'pwd':
      pwd();
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(filepath);
    default:
      process.stdout.write('You typed: ' + cmd);
      process.stdout.write('\nprompt > ');
  }
});
