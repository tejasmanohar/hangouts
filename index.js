var hangoutsBot = require("hangouts-bot");
var bot = new hangoutsBot('idgafman97@gmail.com', 'stupidasspassword');
var prompt = require('prompt');

bot.on('message', function(from, message) {
  console.log('New message: '+message);

  prompt.start();

  prompt.get([{
        response: '',
        required: true
      }
      ], function (err, result) {
        if(err) {
          throw err;
        } else {
          for(var i = 0; i < 10; i++) {
            bot.sendMessage(from, result.question);
          }
        }
    });
});
