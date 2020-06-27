const Discord = require("discord.js");

module.exports = {
    name: "yeezy",
    run: (client, msg) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("FAQ")
            .setAuthor("Yeezy Supply")
            .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
            .setColor(0xDB4F58)
            .setDescription("Below is the FAQ for the Tohru Yeezy Supply module. Use the reactions below to find information on common errors you could come across when using Tohru, and also the recommended set up.")
            .addField("*Why do I need to use a profile or select sizes for browser mode?*", "We will autofill your information as you proceed through checkout for the browser mode.")
            .addField('*Why does my task say "Unable to Access Site"*', "This often happens when yeezy flags the proxy you are using. If you restart your task the bot should pick the next proxy in your proxy group.")
            .addField("*How do I harvest cookies?*", "We take care of this for you. You do not need to harvest any cookies, just run tasks.", false)
            .addField("**Profile Error**", "⚠️", true)
            .addField("**Unable to Access Site**", "🚫", true)
            .setFooter("For anymore questions, please open up a ticket in #support-tickets")
        msg.channel.send(embed0).then(m => {
            m.react("⚠️")
            m.react("🚫")
            m.react("🏠")

            const filter = (reaction, user) => reaction.emoji.name === "⚠️" && user.id === msg.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on("collect", () => {
                const embed = new Discord.MessageEmbed()
                    .setTitle("Profile Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Double check your profiles for any misinformation. This could be anything from CC expiration to shipping/billing address. If you are using a reshipper it is likely that it is banned. Try using real addresses for better results.")
                    .addField("**Unable to Access Site**", "🚫", true)
                    .addField("**Home**", "🏠", true)
                m.edit(embed)
            })

            const filter1 = (reaction, user) => reaction.emoji.name === "🚫" && user.id === msg.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 });

            collector1.on("collect", () => {
                const embed1 = new Discord.MessageEmbed()
                    .setTitle("Unable to Access Site")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("This often happens when yeezy flags the proxy you are using. If you restart your task the bot should pick the next proxy in your proxy group.")
                    .addField("**Profile Error**", "⚠️", true)
                    .addField("**Home**", "🏠", true)
                m.edit(embed1)
            })
            const filter2 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === msg.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            collector2.on("collect", () => {
                const embed2 = new Discord.MessageEmbed()
                .setTitle("FAQ")
                .setAuthor("Yeezy Supply")
                .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                .setColor(0xDB4F58)
                .setDescription("Below is the FAQ for the Tohru Yeezy Supply module. Use the reactions below to find information on common errors you could come across when using Tohru, and also the recommended set up.")
                .addField("*Why do I need to use a profile or select sizes for browser mode?*", "We will autofill your information as you proceed through checkout for the browser mode.")
                .addField('*Why does my task say "Unable to Access Site"*', "This often happens when yeezy flags the proxy you are using. If you restart your task the bot should pick the next proxy in your proxy group.")
                .addField("*How do I harvest cookies?*", "We take care of this for you. You do not need to harvest any cookies, just run tasks.", false)
                .addField("**Profile Error**", "⚠️", true)
                .addField("**Unable to Access Site**", "🚫", true)
                .setFooter("For anymore questions, please open up a ticket in #support-tickets")
                m.edit(embed2)
    
            })
        })
    }
};