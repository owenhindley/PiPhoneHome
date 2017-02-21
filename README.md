# PiPhoneHome

Little hack-ed together utility to let your Raspberry Pi (or any other machine) phone home to say what its IP address is.

Useful for installation situations where your Pi might change IP, and it's hard (or slow) to plug in a monitor.

There's almost certainly a better way of doing this.

### Setup

* Create Heroku account, if you haven't already
* Publish the repo to your new app, e.g. `http://my-pi-phone-home.herokuapp.com`
* When you visit the app address in your browser, you should get a blank response. You need to start reporting information from your connected devices.
* Look inside `index.html` for an example of how to publish data to the app :

```
var socket = io("http://your-heroku-app.herokuapp.com");

socket.on('connect', function(){
	socket.emit("ip", {
		ip : "127.0.0.1",
		name : "MyTestName"
	});
});
```
* We're using socket.io to send data - so you'll need a library that works for your platform, for example `socket.io-client` on nodejs.
* 



