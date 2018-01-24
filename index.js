const Discord = require('discord.js')
const bot = new Discord.Client()
var request = require('request')

var url = "http://euw.op.gg/summoner/userName=Yieldannn"
    request(url, err, resp, body){
    var $ = cheerio.load(body);
    var tierRank = $('tierRank');
    var tierRank = tierRank.text();
    console.log("Coucou");
    console.log(tierRank);
}


bot.login('NDA1NTI5ODc4MTM4NTg1MDg4.DUlyVw.dIRclJcJUe0ny7njGORq-T1_Y2c')
bot.on('message', function (message) {
    if (message.content === '!elo') {
        message.channel.send(document.getElementsByClassName('tierRank')[0].innerHTML);
    }
});



