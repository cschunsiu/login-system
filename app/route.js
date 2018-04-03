//require data.js and export module into a variable
const json = require("./data");

//export routing methods
module.exports = function(app) {
  //create post method
  app.post('/', (req, res) => {
    //assign data to variables
    var requestInfo = req.body;
    let results = json.getData();
    //loop each object and compare username
    for(object in results){
      if(results[object].username == requestInfo.username){
        if(results[object].password == requestInfo.password){
          //return login.ejs and replace message variable with string
          return res.render('login',{message:'Success!!'});
        }else{
          //return login.ejs and replace message variable with string
          return res.render('login',{message:'Fail! email and password dont match! please try again'});
        }
      }
    }

    //return login.ejs and replace message variable with string if no username matches
    return res.render('login',{message:'Fail! email doesnot exist'});
  });

  //default route and return index.ejs
  app.get('/', function(req, res) {
    res.render('index',{});
  });
};
