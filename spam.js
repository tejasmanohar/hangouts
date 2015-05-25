var hangoutsBot = require("hangouts-bot");
var bot = new hangoutsBot('idgafman97@gmail.com', 'stupidasspassword');
var Rwg = require('random-word-generator');
var generator = new Rwg();

bot.on('message', function(from, message) {
  console.log('New message: '+message);
  console.log("Now, let's spam 'em");
  setInterval(function() { 
    bot.sendMessage(from, generator.generate());
  }, 500)
});