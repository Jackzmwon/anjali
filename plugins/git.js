const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
   
  r_text[0] = "jackz.png";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `*Jackz*

*owner number wa.me/918075641889?text=Hi*
*wizard ser wa.me/+917306103794?text=Hi*
*bot made by jackz*
*coding jackz*
*special thankz to wizard,anjali,josephine,amfa prince and paruzz*

*www.instagram.com/safar_muhmd*

*wizard ser group power akanam https://chat.whatsapp.com/CU6bxdI29Uk8dYg6n5DZnP*

`}) 

}));
        
