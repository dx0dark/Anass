const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    desc: "To get the menu.",
    react: "🔻",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: '',
fun: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
 }
}
const voice = {
    alive: 'media/Linda.mp3'
}
let madeMenu = `
🌟🔻 Anas En Najjari 🔻🌟

      👋 HELLO, ${pushname}!

🔻 FREE PALESTINE! 🔻 

📊 *𝗕𝗼𝘁 𝗜𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:*
────────────────────
⏳ *𝗥𝘂𝗻𝘁𝗶𝗺𝗲:* ${runtime(process.uptime())}
👤 *𝗢𝘄𝗻𝗲𝗿 𝗡𝗮𝗺𝗲:* HSVXDX
📞 *𝗢𝘄𝗻𝗲𝗿 𝗡𝘂𝗺𝗯𝗲𝗿:* ${config.BOT_NUMBER}
────────────────────

📥 *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 𝗠𝗲𝗻𝘂:*

${menu.download}

────────────────────
🔧 *𝗠𝗮𝗶𝗻 𝗠𝗲𝗻𝘂:*

${menu.main}

────────────────────
🎉 *𝗙𝘂𝗻 𝗠𝗲𝗻𝘂:*

${menu.fun}

────────────────────
👥 *𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂:*

${menu.group}

────────────────────
🔒 *𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.owner}

────────────────────
🔄 *𝗖𝗼𝗻𝘃𝗲𝗿𝘁 𝗠𝗲𝗻𝘂:*

${menu.convert}

────────────────────
⚙️ *𝗢𝘁𝗵𝗲𝗿 𝗠𝗲𝗻𝘂:*

${menu.other}

────────────────────
*© Anas En Najjari* 
💻 *Insta:* https://www.instagram.com/najjari_anas?igsh=bDVheWg2YWhoZ25s
 

`

return await conn.sendMessage(from,{image: {url: config.ALIVE_IMG},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})


