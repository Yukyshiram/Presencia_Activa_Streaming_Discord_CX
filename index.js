const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
require('dotenv').config();
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
const chalk = require('chalk');
const consola = require("./consol")
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("1056078692230639627", "Aimou90")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("Aimou90 + 2X")
        .setUrl("https://youtu.be/3FVNaKDAWM0")
        .setType("STREAMING")
        .setApplicationId("1056078692230639627")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("Simplemente CX")
        .setAssetsSmallImage(image.id)
        .setState("X2 DCAMINO")
        //.setParty({
        //    size: [1, 4],
        //    id: uuid()
        //})
        .setDetails("Boxmine")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
    consola();
    console.log(`
	\n\n\n
	Usuario: ${client.user.username} 
	Inicio exitoso, toca engañar a Vicemi!`
    );
});
