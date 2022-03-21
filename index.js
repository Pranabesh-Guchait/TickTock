// install and call the express
var express = require("express");
var app = express();
//install and call the body-parser
var bodyparser = require("body-parser");
const bodyParser = require("body-parser");
//install ejs and call it in 
app.set('view engine', 'ejs');
//
app.use(bodyParser.urlencoded({ extended: true }));
//input css file in this web-page from public folder
app.use(express.static("public"));


//install mongoose and call it in 
var mongoose = require("mongoose");


//Database create and connect with MongoDB
mongoose.connect('mongodb+srv://Pranabesh:pranabesh777@cluster0.y0v2j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');


/*
//create a schema in DB for save Iteam Name
const itemshema = { name: String };
//create a model
const Iteam = mongoose.model("Iteam", itemshema);
//create some iteam
const iteam1 = new Iteam({ name: "Welcome Pranabesh", });
//create some Array 
const d = [iteam1,];
//insurt iteams in the collection
Iteam.insertMany(d, function (err) {
    if (err) { console.log(err); }
    else { console.log("Sucessfully saved iteams in DB"); }
});

*/

var i1=[];

//sending data to the server and accept the data from input 
app.post("/", function (req, res) {
    i = req.body.n;
    i1.push(i);
    //console.log(i);//i is from i=red.body.n
    //res.render("list",{newsListItem:i})//"newsListItem" from where you want to display your output from heading
    res.redirect("/");
})
//sending requeast to the server
app.get("/", function (req, res) {
    //res.send("hey guys");
    res.render("list", { newsListItem: i1 });
    //send request
    //Iteam.find({}, function (err, f) {
        //console.log(f);
      //  res.render("list", { newsListItem: f });
   // });
})

//create a surver
app.listen(3000, function () {
    console.log("listen to port 3000");
})