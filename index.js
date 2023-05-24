const keepAlive = require("./server")
let discord = require('discord.js-selfbot-v11')
let rpcGenerator = require("discordrpcgenerator")
require('dotenv').config();
const TOKEN = (process.env.TOKEN);
const consola = require("./consol");
var uuid = ()=>([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))
let client = new discord.Client()

keepAlive();

client.on("ready", () => {
    rpcGenerator.getRpcImage("1071986602265542726", "boxmineworld") //Este tiene el ID y la imagen grande
    .then(largeImage => {
        rpcGenerator.getRpcImage("1071986602265542726", "verify") //este tiene el ID y la imagen pequeña
        .then(smallImage => {
            const presence = new rpcGenerator.Rpc()
                .setName("Boxmine + CX")
                .setUrl("https://www.youtube.com/watch?v=WOcVXLKpKr0&t=5s") //este es el link al que sera redireccionado con el boton "ver"
                .setType("STREAMING") //hay otros tipos, pero por el momento solo ese
                .setApplicationId("1071986602265542726") //este tambien tiene el id
                .setAssetsLargeImage(largeImage.id) 
                .setAssetsLargeText("CX project") //texto de la imagen grande
                .setAssetsSmallImage(smallImage.id)
                .setAssetsSmallText("Verify") //texto de la imagen pequeña
                .setState("Boxmine State") //jugando a "boxmine state"
                .setDetails("Boxmine details");
        
            client.user.setPresence(presence.toDiscord());
        })
        .catch(console.error);
    })
    .catch(console.error);
    
    consola();

    console.log(`
        \n\n\n
        Usuario: ${client.user.username} 
        Inicio exitoso, toca engañar a Vicemi!`
    );
});

//client.login(Toki);
client.login(TOKEN);
