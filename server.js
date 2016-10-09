var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
	article1 : {
		title : 'Article1',
		date : 'oct 9',
		heading : 'article1',
		content : 'this is article 1'
	},
	'article2' : {
		title : 'Article2',
		date : 'oct 10',
		heading : 'article2',
		content : 'this is article 2'
	},
	'article3' : {
		title : 'Article3',
		date : 'oct 11',
		heading : 'article3',
		content : 'this is article 3'
	}
};

function createTemplate(data){
	var title = data.title;
	var date = data.date;
	var heading = data.heading;
	var content = data.content;
	var htmlTemplate = `
		<html>
			<head>
				<title>
					${title}
				</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link href="/ui/design.css" rel="stylesheet" >
				<style>
				    .container{
                	max-width : 800px;
                	margin : 0 auto;
                	color : #ff1245;
                	background-color : white;
                	font-family : sans-serif;
                    }
                    body{
                        margin-top : 60px;
                        padding-left :20px;
                        padding-right :20px;
                        margin-bottom : 30px;
                        background-color : gray;
                    }
				</style>
			</head>
			<body>
				<div class="container">
					<div>
						<a href="#">Home</a>
					</div>
					<hr/>
					<h3>
						${heading}
					</h3>
					<div>
						${date}
					</div>
					<div>
						${content}
					</div>
				</div>
			</body>
		</html>
	`;
	return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:aName',function(req,res){
    var aName = req.params.aName;
    res.send(createTemplate(articles[aName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
