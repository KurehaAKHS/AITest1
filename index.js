var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1530574934,
  channelSecret: 0fb06f551ef73058d0435ae5e86a42b2,
  channelAccessToken: O6+nq9YULuLSGgMXm8a9YPxxpQm3Nj4vvUSe3lfJq7oKKmbAsu2V0l4mV2YBI3+x/80cnD4aLsRjQo/Al4fI4eLmPFbcG8ZvUgyp396uW17GqdqxmZb46AyPCIZl0OUFa4Q9EjfdZVj+vTBzuiF6tgdB04t89/1O/w1cDnyilFU=
});

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});