const request = require('request');

module.exports = function (path) {
  request.get(path, (error, response, body) => {
    console.log('body :', body);
    process.stdout.write('prompt > ');
  });
};
