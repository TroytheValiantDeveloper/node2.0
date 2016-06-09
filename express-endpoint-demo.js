var express = require('express');
var app = express();
var fs = require('fs');

app.use('/message', function(req,res) {
    console.log('user requested endpoint');
    
    res.send('<div id="container"></div><script>var Hello = React.createClass({displayName: "Hello", render: function() {return React.createElement("div", null, "Hello ", this.props.name);}});ReactDOM.render(React.createElement(Hello, {name: "World"}), document.getElementById("container")); </script>');
});


app.use('/users', function(req,res) {
    fs.readFile('./data1.json', 'utf-8', function(err, data) {
        res.send(data);
    });
});

app.listen(3000);