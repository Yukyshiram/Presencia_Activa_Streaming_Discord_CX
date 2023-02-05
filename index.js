const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
require('dotenv').config();
const dotenv = require('dotenv');
const TOKEN = (process.env.TOKEN);
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive()
client.login(TOKEN)
 
client.on("ready", () => {
    rpcGenerator.getRpcImage("1056341354311069696", "tokisaki")
    .then(image => {
        let presence = new rpcGenerator.Rpc()
        .setName("CX_Project")
        .setUrl("https://www.youtube.com/watch?v=Z6VchWjZYwI")
        .setType("STREAMING")
        .setApplicationId("1056341354311069696")
        .setAssetsLargeImage(image.id)
        .setAssetsLargeText("Dev Off")
        .setDetails("Working at IBM")
 
        client.user.setPresence(presence.toDiscord())
    }).catch(console.error)
  console.log(`${client.user.username} Inicio exitoso, toca engañar a Vicemi!`)
})
