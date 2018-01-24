const Discord = require('discord.js');
const cheerio = require('cheerio');
const bot = new Discord.Client();
var request = require('request');
var tierRankText;
var LeaguePointsText;
var winsText;
var lossesText;
var winratioText;
var url = "http://euw.op.gg/summoner/userName="
function getInfo(nickname,message) {
    request(url+nickname, function(err, resp, body){
        var $ = cheerio.load(body);
        var tierRank = $('.tierRank');
        tierRankText = tierRank.text();
        var LeaguePoints = $('.LeaguePoints');
        LeaguePointsText = LeaguePoints.text().replace(/\s/g,'');
        var wins = $('.wins');
        winsText = wins.text();
        var losses = $('.losses');
        lossesText = losses.text();
        var winratio = $('.winratio');
        winratioText = winratio.text();
        if (tierRankText == 'Unranked'){
            message.channel.send('This player is unranked');
        }
        if (tierRankText == false){
            message.channel.send('This nickname doesn\'t exist');
        }
        if(tierRankText != "Unranked" && tierRankText){
            message.channel.send(tierRankText + " - " + LeaguePointsText + "\n" + winsText + " - " + lossesText + "\n" + winratioText);
        }});
};

bot.login('NDA1NTI5ODc4MTM4NTg1MDg4.DUlyVw.dIRclJcJUe0ny7njGORq-T1_Y2c');
bot.on('message', function (message) {
    if (message.content.startsWith('!elo'))
    {
        var nickname = message.content.substr(5);
        getInfo(nickname,message);
        console.log(url + nickname,tierRankText);
    }
});
