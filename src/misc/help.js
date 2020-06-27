const Discord = require("discord.js");

module.exports = {
    name: "help",
    run: (client, msg) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Tohru AIO Bot Help Guide", "https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
        .setColor(0xDB4F58)
        .setDescription("Welcome to the Tohru AIO Helper Discord bot. This bot covers all the modules that Tohru has (Shopify, Supreme, YS, and Footsites). For any help, please contact thiccsupreme#0002 on Discord")
        .setFooter("Prefix: t! | Created by @FootlockerRU")
        .addField("**t!footsites**", "Will pull up all the errors and FAQ for Footsites")
        .addField("**t!supreme**", "Will pull up all the errors and FAQ for the Supreme module")
        .addField("**t!yeezy**", "Will pull up all the errors and FAQ for the Yeezy Supply Module")
        .addField("**t!shopify**", "Will pull up all the errors FAQ, and store information for Shopify")
        .setTimestamp()
        msg.channel.send(embed);
    }
}