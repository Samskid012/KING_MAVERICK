//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348087120441";
global.sudo = process.env.SUDO || "2348087120441";
global.owner = process.env.OWNER_NUMBER || "2348087120441";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID |eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0Jwa2JybUUzTm1mb0pSRWtHSHh3UGVhN1J2UmVxRnhQN0Jac21uenBXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmxKRDg2bzhKbVBKRTBxYUtVeDk2aHpoMWNMdTJxVlZQRTgvNmY2Q2pWUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QTd6SkZBMU0yZTBCdlFwZklyMWtjeDFMam5oeHl2dkZvQXlNNGZtZm1jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjNXhneDl2YjEzRzVVVnhHQlNDdkFEdXdqREVUT2x6bTNwbk9YbXFGZ1RrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllQTWdvMUNKS0FJdnE1aW5PaitNR0lrMWxwbG5PSTRoWmZoNHUyaGxMSGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl1bUhpV3FpY1FlNm5uZm9oWEZ0U0JkRERVMy92MHM4VFZqZmdzOSs2MkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV09pN0hVeCtOMHFWc0JwZHNzaHB1K3BBNVZmREMrUCtyOWl2c3ZUa3NtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFgzakhCN0k5MmZ1dnRibTVPbk13WTZtazdoVWhyeTdIVGtxSDNnTHJ3bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktoWFdpRVBYR2NTTStuNUZrY2NiOEUrbmJMd25Rdks2M0YvajdrMXZSaTZLZUcrNlJYaWJYNFAzUGFwQks4VHNFQXpyZkxVS0hFQXAvTVg4SlZQZWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6IkJ4OXFoQVNlbXJrWnl2UnJJcHZsYUxjUVZucVRqRGxBbG5LTmVaR0RQVzA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InhFRGpVYVJGUVJxclVjOVNHb0JvamciLCJwaG9uZUlkIjoiMzJkZTU2NjYtOTZkMy00Nzk5LWE2NTQtMWZjMGU1Y2JhNzJhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtaanZrRkJyaVNOdlFPZUdOZlRFWEVIVFlZcz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUMHFHSU5TRDF0clpIY2ZxZU04bU95bzZjelk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzVBSkJTNFoiLCJtZSI6eyJpZCI6IjIzNDgwNjIxNzM2MzU6NUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2ZrdUl3R0VNK2gwYnNHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoibzg4cGQydytpK1BEMnhJdWZZQ0lzUUNmRnVnU3dNbWxMRXcyWFVrN0RSMD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYm4wSUJKdyt3Z3VFKzhqWGw0VnJtTjF1cVFCeVB4SVFTbzZDOERBSk1CeXBrdVpUeHJKL0p5NndtelFIQWFMYnB3TFlHU0VMNUZ4N0swdWc0OUtNQ3c9PSIsImRldmljZVNpZ25hdHVyZSI6Ill6dnRGQVlzeDZ3Y2RrUWR1Z3RPZ2plTDdmRmNLQW1XekNlbmgxT1IvZU92a0pVWmdYWXFQNFFVNU4xSzhyamZSV2NhV01oV1JMYmhrb25uenN6aGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MjE3MzYzNTo1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFQUEtYZHNQb3ZqdzlzU0xuMkFpTEVBbnhib0VzREpwU3hNTmwxSk93MGQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU2NzYxMjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSGsxIn0=|
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RnN3VGRzdlKzNHZW1RQXJlK0VEeWlkK2FQQlZPZWhURDJHaXlEb0RtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5kMWIwblc3UzhaNU9icml5ODhtUEorVEwzVk53akt4anZPeXZ6ZjNUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxTklUa0FIWDVZQm9URHpxNkx3QytyNTRxM09HUmNwS0lPZDJQVkYrdVVvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRDdvK2d3ZzBKdHZEZWVJTW83RlpoRnQybTZoMmtJbzNVMHZuQ3gzUlFvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNZU1GNG9Dc1E1Tm1nTU9SOGNJa2N5Y3preW1BQkoveFNkNGZrbU5tbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBKa0k3bkdkVExVSlRoSWdFc25IeStrWGVSMkpJNjVSMEVYa3VQdHJ4RWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dOS2tWZDZSZTJhTnNnTHQxQlRmYVF4VkQvMGJGYklvOWczY1BHaFZsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEtuZE5BME8zVUQ5azJ0cmFtbzFTQmlPK1JEQzhUenpXUmZuTVpIYndUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikx1eDhSYVAwNFNvYmg5WjRvL2R3WUErSEs5Y081MnF4dVZXMTFxbVR1L2g2VzlvaCsrYXNZa1RqTHJ1ZkZHekpacmdwSU8waUtaZTdlaFJockNTMWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IkRPTmh6UFQ2QU5scDBTOFcyZ0RKZ1Jpd3FLQjVKQk9VL1lXYjRzRW1ENjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODA4NzEyMDQ0MUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRDlFQkU3NDFEMTBEQTI5N0NEQUZFREM5OEE2Q0I4RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2MzI0MjA0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPMUVodUcwdVR1MkpqNHFpanJOZUVRIiwicGhvbmVJZCI6ImI3MjIzOGRjLTJlMmYtNDc2Yi1hNDU5LTdmNjk2NTc2MWNlNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKbVB4M0p0b0dVNFRNTFdRVmw3bE5aeWR2Q2s9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNm9BTUszN1B4QXpyckFMY2EyVmR1emZ0Z1FBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlhBMkhQUzFZIiwibWUiOnsiaWQiOiIyMzQ4MDg3MTIwNDQxOjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbmw3TGNFRU5ybytMc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJINmFMWVdxV1VBSHBYL2h6MjZEOThxUlN3bFg0NUlmV2U3L1RGY2pjb1VRPSIsImFjY291bnRTaWduYXR1cmUiOiJWQTQ1VHhwbUprRllHa2c3M01Ya0NJbTdXMEhvREc1d2w1ZExoT1drclovUmVyWUZuTTlZWE1PQ3p6bjlKQThGSjRLb1JqejZzY2VpOGZBQ3dDMzlEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiM2tOMTRiZ3BxZGhqMzhoRWdDSHlsMStJUENoa3lzREpRYjluOTlvcVV5KzdHbG9oZ1g4L0QxTFB1dXZjci8xb25iUHB2azNLdSs2MGhlYWd4YUY5aWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDg3MTIwNDQxOjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlIrbWkyRnFsbEFCNlYvNGM5dWcvZktrVXNKVitPU0gxbnUvMHhYSTNLRkUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzYzMjQxOTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS1NNIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "*",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_MAVERICK™`",
  author: process.env.PACK_AUTHER || "MAVERICK",
  packname: process.env.PACK_NAME || "KING_MAVERICK",
  botname: process.env.BOT_NAME || "KING_MAVERICK",
  ownername: process.env.OWNER_NAME || "MAVERICK",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
