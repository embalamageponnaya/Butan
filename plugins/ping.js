const { cmd, commands } = require('../command');
const fs = require('fs');
const config = require('../config');

cmd({
    pattern: "button",
    desc: "Bot's Online or No.",
    react: "👋",
    category: "main",
    filename: __filename
},
async(conn, mek, m, {from, reply}) => {
    try {
        const aliveMessage = `He He 🌚`;

        if (config.BUTTON === 'true') {
            await conn.sendMessage(from, {
                footer: '© 2025 Queen Nthu MD',
                buttons: [
                    {
                        buttonId: `.system`,
                        buttonText: { displayText: 'System 📟' },
                        type: 1
                    },
                    {
                        buttonId: `.ping`,
                        buttonText: { displayText: 'Ping 📍' },
                        type: 1
                    }
                ],
                headerType: 1,
                viewOnce: true,
                image: {url: "https://i.ibb.co/wsRfxsf/IMG-20241220-WA0008.jpg" },
                caption: aliveMessage,
                contextInfo: {
                    isForwarded: true,
                    mentionedJid: [m.sender],
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363322195409882@newsletter",
                        newsletterName: "Queen Nethu MD V2"
                    }
                }
            }, {quoted: mek})
        } else {
            await conn.sendMessage(from, {
                image: {url: "https://i.ibb.co/wsRfxsf/IMG-20241220-WA0008.jpg" },
                caption: aliveMessage
            }, {quoted: mek})
        }
    } catch(e) {
        console.log(e)
        reply(`*ERROR ❗❗*`);
    }
})
