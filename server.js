var express    = require("express"),
        path       = require("path"),
        bodyParser = require("body-parser"),
        app                = express();

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.listen(3000, function(){
        console.log("Running on port 3000...");
})





