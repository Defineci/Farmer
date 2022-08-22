const Discord = require("discord.js")
module.exports.run= async(client, message, args) => {
const csfetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

message.channel.send("Dolar Kuru Yükleniyor...").then(async msg => {    
setTimeout(() => {
    csfetch("/html/body/table/tbody/tr[2]/td[2]").then(async r => {
    const json = await r.json();
    const dolarobj = json.data.filter(c => c.SEMBOL=="USDTRY")[0]
if (dolarobj.SATIS){
        msg.edit(`Güncel Dolar Kuru: **${dolarobj.SATIS}TL**`)
      } else {
        msg.edit("Dolar Kurunu Bulamadım! :(")
      }
})
}, 2000)
  })
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "fiyat"
}