const Discord = require('discord.js')
const bot = new Discord.Client()

bot.login('NDA1NTI5ODc4MTM4NTg1MDg4.DUlyVw.dIRclJcJUe0ny7njGORq-T1_Y2c')
bot.on('message', function (message) {

    if (message.content === '!elo') {
        message.channel.send(
            document.getElementsByClassName('tierRank')[0].innerHTML +
            document.getElementsByClassName('LeaguePoints')[0].innerHTML +
            document.getElementsByClassName('wins')[0].innerHTML +
            document.getElementsByClassName('losses')[0].innerHTML +
            document.getElementsByClassName('winratio')[0].innerHTML;
        )
    }

    function httpGet(http://euw.op.gg/summoner/userName=Yieldannn)
    {
        if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
            xmlhttp=new XMLHttpRequest();
        }
        else
        {// code for IE6, IE5
            xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange=function()
        {
            if (xmlhttp.readyState==4 && xmlhttp.status==200)
            {
                return xmlhttp.responseText;
            }
        }
        xmlhttp.open("GET", theUrl, false );
        xmlhttp.send();
    }


})
