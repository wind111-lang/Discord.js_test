const http = require('http');
const querystring = require('querystring');
const discord = require('discord.js');
const client = new discord.Client();

http.createServer(function(req, res){
  if (req.method == 'POST'){
    var data = "";
    req.on('data', function(chunk){
      data += chunk;
    });
    req.on('end', function(){
      if(!data){
        res.end("No post data");
        return;
      }
      var dataObject = querystring.parse(data);
      console.log("post:" + dataObject.type);
      if(dataObject.type == "wake"){
        console.log("Woke up in post");
        res.end();
        return;
      }
      res.end();
    });
  }
  else if (req.method == 'GET'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Discord Bot is active now\n');
  }
}).listen(3000);

client.on('ready', message =>{
  console.log('準備完了');
  client.user.setPresence({ activity: { name: 'bot' } });
});

client.on('message', message =>{
  function waruguchi(){
    
  }
  if (message.author.id == client.user.id || message.author.bot){
    return;
  }
  if(message.isMemberMentioned(client.user)){
   sendReply(message, "うるせーーーーーー　メンションしてんじゃねーーーーーーーー");
   return;
 }
  if (message.content.match(/泣いた抜いた|泣いたし抜いたわ|泣いたし抜いた|泣いた抜いたわ|泣いたわ抜いたわ|泣いたわ抜いた|泣き抜き|泣く抜く|泣抜|nakinuki|naitanuita|naitashinuitawa|naitasinuitawa|naitashinuita|naitasinuita|naitawanuitawa|ないたぬいた|ないたわぬいたわ|ないたしぬいたわ|なきぬき|なくぬく|ナイタヌイタ|ナイタシヌイタワ|ナイタシヌイタ|ナキヌキ|ナイタワヌイタワ/)){
    let text = "人の仕事取ってんじゃねーーーーーーーーーーー";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣いたし')){
    let text = "抜いたわ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣かぬ')){
    let text = "抜く"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣かず')){
    let text = "抜く"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣かせる')){
    let text = "抜かせる"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('なかせる')){
    let text = "ぬかせる"
    sendMsg(message.channel.id, text);
    return;
  }
   else if (message.content.match('ないたし')){
    let text = "ぬいたわ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣いたわ')){
    let text = "抜いたわ";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('ないたわ')){
    let text = "ぬいたわ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣いた')){
    let text = "抜いた";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣き')){
    let text = "抜き";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('なき')){
    let text = "ぬき";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('naki')){
    let text = "nuki";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('naitasi')){
    let text = "nuitawa";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('naitashi')){
    let text = "nuitawa";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('naitawa')){
    let text = "nuitawa";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('naita')){
    let text = "nuita";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='泣'){
    let text = "抜";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣け')){
    let text = "抜け";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='nake'){
    let text = "nuke";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('なけ')){
    let text = "ぬけ";
    sendMsg(message.channel.id, text);
    return;
  } 
  else if (message.content==='なぎ'){
    let text = "ぬぎ";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='ナギ'){
    let text = "ヌギ";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='nagi'){
    let text = "nugi";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('ないた')){
    let text = "ぬいた";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match('泣く')){
    let text = "抜く";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='なく'){
    let text = "ぬく";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content==='울었다'){
    let text = "사정";
    sendMsg(message.channel.id, text);
    return;
  }
  else if (message.content.match(/sad|cry|crying/)){
    let text = "Ejaculate";
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match(/哭/)){
    let text = "射爆了";
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content==='name'){
    let text = "ume";
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content==='なめ'){
    let text = "うめ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content==='ナメ'){
    let text = "ウメ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('泣ける')){
    let text = "抜ける"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('なける')){
    let text = "ぬける"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('nakeru')){
    let text = "nukeru"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('号泣')){
    let text = "暴発"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('ごうきゅう')){
    let text = "ぼうはつ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match(/goukyuu|goukyu/)){
    let text = "bouhatsu"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('ナイタ')){
    let text = "ヌイタ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('ナイタシ')){
    let text = "ヌイタワ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('ナイタワ')){
    let text = "ヌイタワ"
    sendMsg(message.channel.id, text);
    return;
  }
  else if(message.content.match('ナキ')){
    let text = "ヌキ"
    sendMsg(message.channel.id, text);
    return;
  }
  
  
});

if(process.env.DISCORD_BOT_TOKEN == undefined){
 console.log('DISCORD_BOT_TOKENが設定されていません。');
 process.exit(0);
}

client.login( process.env.DISCORD_BOT_TOKEN );

function sendReply(message, text){
  message.reply(text)
    .then(console.log("Reply: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option={}){
  client.channels.get(channelId).send(text, option)
    .then(console.log("Send Message: " + text + JSON.stringify(option)))
    .catch(console.error);
}

