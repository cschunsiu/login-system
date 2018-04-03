//require the file system module
const fs = require('fs');

//create function getData and read json file, parse it and return as JSON objects
exports.getData = function(){
      let rawdata = fs.readFileSync('./asset/account.json');
      let student = JSON.parse(rawdata);
      return student;
}
