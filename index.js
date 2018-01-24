const Discord = require('discord.js')
const cheerio = require('cheerio')
const bot = new Discord.Client()
var request = require('request')
var tierRankText;
var LeaguePointText;
var winsText;
var lossesText;
var winratioText;

var url = "http://euw.op.gg/summoner/userName=Yieldannn"
request(url, function(err, resp, body){
    var $ = cheerio.load(body);
    var tierRank = $('.tierRank');
    tierRankText = tierRank.text();

    var LeaguePoint = $('.LeaguePoint');
    LeaguePointText = LeaguePoint.text();

    var wins = $('.wins');
    winsText = wins.text();

    var losses = $('.losses');
    lossesText = losses.text();

    var winratio = $('.winratio');
    winratioText = winratio.text();
});

bot.login('NDA1NTI5ODc4MTM4NTg1MDg4.DUlyVw.dIRclJcJUe0ny7njGORq-T1_Y2c')
bot.on('message', function (message) {
    if (message.content === '!elo') {
        message.channel.send(tierRankText,LeaguePointText,winsText,lossesText,winsText);
    }
});



