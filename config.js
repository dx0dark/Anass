

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "DUc3gQxa#rMb3k-Gbau_LoaowTk0GMgxXbWDjrkWfJvILH-pqBww#",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/48e22d72d6efcc2fd95a1.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HELLOW THEIR, ANAS EN NAJJARI IS ALIVE...\n\nOWNER: ANAS EN NAJJARI\n\nTHANKS FOR USING ANAS EN NAJJARI\n\n> *© ANAS EN NAJJARI*/n/n*> HSVXDX :* https://www.instagram.com/najjari_anas?igsh=bDVheWg2YWhoZ25s",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
BOT_NUMBER: process.env.BOT_NUMBER || "923261334689",
OWNER_REACT: process.env.OWNER_REACT || "🔆",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39",
READ_CMD: process.env.READ_CMD || "true",
};

