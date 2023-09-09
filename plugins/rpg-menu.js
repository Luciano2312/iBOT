import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭━━❍  𝕚𝔹𝕆𝕋 - 𝔹𝕆𝕋  ❍━━╮ 
┃ ╭━━━━━━━━━━━━━━━━╮ 
┃ ┃ ╭┈────────────╮ 
┃ ┃ │ ❍ 🅼🅴🅽🆄 ❍ 
┃ ┃ ╰┈────────────╯ 
┃ ╰━━━━━━━━━━━━━━━━╯ 
┣━━━▢ ʙᴜᴇɴᴀꜱ, ${taguser}⁩• 
┃╭━━━━━━━━━━━━━━━━╾• 
┃┃  ❍ 1.20.15 ❍ 
┃┣━━━━━━━━━━━━━━━━╾• 
┃┃ ⋄ ᴄʀᴇᴀᴅᴏʀ: Anonymous
┃┃ ⋄ ꜰᴇᴄʜᴀ » ${moment.tz('America/Buenos_Aires').format('DD/MM/YY')}
┃┃ ⋄ ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ » ${uptime}
┃┃ ⋄ ʟᴇɴɢᴜᴀᴊᴇ » ꜱᴘᴀɴɪꜱʜ 
┃┃ ⋄ ᴜꜱᴜᴀʀɪᴏꜱ » 6243
┃╰━━━━━━━━━━━━━━━━╾• 
╰━━━╼  𝕚𝔹𝕆𝕋 - 𝔹𝕆𝕋  ╾━━━╯ 

┏━━━━━━━━━━━━━━━━┓
┃ *< 𝕀ℕ𝔽𝕆 𝔻𝔼𝕃 𝕌𝕊𝕌𝔸ℝ𝕀𝕆 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ *🎖️ Nivel:* ${level}
┣ *🧰 Experiencia:* ${exp}
┣ *⚓ Rango:* ${role}
┣ *💎 Diamantes:* ${limit}
┣ *💸 Dolares:* ${money}
┣ *🪙 Tokens:* ${joincount}
┣ *🎟️ Premium:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓
┣ *< ℝ𝔼ℙ𝕆ℝ𝕋𝔸ℝ 𝔼ℝℝ𝕆ℝ𝔼𝕊 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟⛔️ _${usedPrefix}reporte *<texto>*_
┗━━━━━━━━━━━━━━━━┛
${readMore}
┏━━━━━━━━━━━━━━━━┓
┃ *< ℝℙ𝔾 - 𝕃𝕀𝕄𝕀𝕋𝔼𝕊 - 𝔼ℂ𝕆ℕ𝕆𝕄𝕀𝔸 />*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💵 _${usedPrefix}menueco_
┣ ඬ⃟ 💵 _${usedPrefix}aventura_
┣ ඬ⃟ 💵 _${usedPrefix}balance_
┣ ඬ⃟ 💵 _${usedPrefix}cazar_
┣ ඬ⃟ 💵 _${usedPrefix}work_
┣ ඬ⃟ 💵 _${usedPrefix}minar_
┣ ඬ⃟ 💵 _${usedPrefix}minar2_
┣ ඬ⃟ 💵 _${usedPrefix}cofre_
┣ ඬ⃟ 💵 _${usedPrefix}regalo_
┣ ඬ⃟ 💵 _${usedPrefix}salud_
┣ ඬ⃟ 💵 _${usedPrefix}tabla_
┣ ඬ⃟ 💵 _${usedPrefix}nivel_
┣ ඬ⃟ 💵 _${usedPrefix}perfil_
┣ ඬ⃟ 💵 _${usedPrefix}buy_
┣ ඬ⃟ 💵 _${usedPrefix}buyall_
┣ ඬ⃟ 💵 _${usedPrefix}slot_
┣ ඬ⃟ 💵 _${usedPrefix}robar *<cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}transferir *<tipo> <cantidad> <@tag>*_
┣ ඬ⃟ 💵 _${usedPrefix}verificar_
┣ ඬ⃟ 💵 _${usedPrefix}unreg *<numero de serie>*_
┣ ඬ⃟ 💵 _${usedPrefix}myns_
┗━━━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽𝚅𝙸𝙰𝙽𝙳𝙾 .𝚛𝚎𝚙𝚘𝚛𝚝𝚎 <𝚝𝚞 𝚛𝚎𝚙𝚘𝚛𝚝𝚎>*', m);
  }
};
handler.command = /^(eco|menueco|menueconomia|menúeconomia|menueconomía|menúeconomía|rpg|limites)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
