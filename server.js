var socketio = require("socket.io");
var http = require("http");

var IP_LIST = [];

var server = http.createServer(function(req, res){
	res.writeHead(200, {
		'Content-Type': 'text/html',
		'Access-Control-Allow-Origin' : '*'
	});

	var resultString = "";
	for (var i=0; i < IP_LIST.length; i++){
		resultString += IP_LIST[i].time + " 	: 	" + IP_LIST[i].name + " 	: 	" + IP_LIST[i].ip;
		resultString += "<br/>";
	}

	res.end(resultString);
});
server.listen(80);

var io = socketio(server);




io.on("connection", function(socket){

	console.log("client connected");

	socket.on("ip", function(data){
		IP_LIST.push({
			time : new Date().toISOString(),
			name : data.name,
			ip : data.ip
		});

		console.log("added IP : ", data.ip);
	});

	socket.on("disconnect", function(){
		
	});

});

