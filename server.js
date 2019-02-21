var express = require('express');
var app = express();
var path = require('path');
var renderer = require('./app/service/renderer.js');

app.set('views', './views'); // specify the views directory
app.engine('html', renderer);
app.set('view engine', 'html'); // register the template engine

//Routes
require('./app/routes/page.js')(app);

app.use(express.static('./views'));

app.listen(process.env.PORT || 8080, function(err) {

    if (!err)
        console.log("Site is live");
    else console.log(err)

});
