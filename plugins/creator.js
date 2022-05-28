function handler(m) {
const q = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": ""
	},
	"message": {
		"contactMessage": {
			"vcard": "BEGIN:VCARD\nVERSION:3.0\nN:;Danz Kontol;;;FN:Danz Kontol\nORG:Danz Kontol;\nTEL;type=CELL;type=VOICE;waid=6288270863279:+62 882-7086-3279\nEND:VCARD"
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.sendContact(m.chat, '6288270863279', 'Danzz.', m)
m.reply(m.chat,'*Tuh nomor owner terkontol sedunia*\n*Chat jika PENTING*', q)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
