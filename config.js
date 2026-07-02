import fs from "fs"
import dotenv from "dotenv"

dotenv.config() 

global.BOT_TOKEN = process.env.BOT_TOKEN || "8935619495:AAG1vjwLrLNAp8rovt1CzVGkc9Ymcy2J15M"

global.PREFIX = "/"

global.owner = ["@Rey_Rufino"] //-usuario
global.ownerID = ["7853070357"]

global.api = "https://nexevo.boxmine.xyz"
global.apikey = "FG-Senna"

//--info FG
global.botName = 'waguri'
global.fg_ig = 'https://www.instagram.com/reyrufino873?igsh=MTI2aWlxaGVsNzB1bQ==' 
global.fg_sc = 'https://github.com/FG98F/dylux-bot' 
global.fg_logo = 'https://cdn.dev-ander.xyz/a/SV0S.jpg' 

//--- Grupos WA
global.fg_canal = '@fg_canal'
global.fg_group = "@fg_userss"


console.log("⚙️ Config cargada")