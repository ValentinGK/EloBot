const Discord = require('discord.js');
const cheerio = require('cheerio');
const bot = new Discord.Client();
var request = require('request');
var encodeUrl = require('encodeurl');
var tierRankText;
var LeaguePointsText;
var winsText;
var lossesText;
var winratioText;
var url = ".op.gg/summoner/userName="
function getInfo(nickname,message,server) {
    if (server == 'kr'){
        server = 'www'
    }
    request(encodeUrl("http://" + server + url+nickname.replace(/\s/g,'')), function(err, resp, body){
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
    try{
        if (message.content === '!help'){
            message.channel.send('type !elo [nickname] [server] \n Server list: \n "kr" for Korea \n "jp" for Japan \n "na" for North America \n "eune" for \n "oce" for Oceania \n "br" for Brazil \n "las" for LAS \n "lan" for LAN \n "ru" for Russia \n "tr" for Turkey \n Leave empty [server] for EUW \n No white spaces in the nickname ! \n Example with Faker (Hide on bush): !elo Hideonbush kr')
        }
        if (message.content.startsWith('!elo'))
        {
            var args = message.content.substr(5).split(" ");
            if (args.length<2){
                getInfo(args[0],message,"euw");
        }
        else{
            getInfo(args[0],message,args[1])
        }}
    }catch(e){
        console.log(e.stack)
    }
});
