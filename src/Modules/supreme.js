const Discord = require("discord.js");

module.exports = {
    name: "supreme",
    run: (client, msg) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("FAQ")
            .setAuthor("Tohru Supreme")
            .setColor(0xDB4F58)
            .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
            .setDescription("Below is the FAQ for the Tohru Supreme module. Use the reactions below to find information on common errors you could come across when using Tohru.")
            .addField("*Why am I stuck on Finding Product?*", "Please check that your monitor poxy for Supreme Settings is not banned. Then double check your task setup. What keywords did you use? If you are still having issues open a ticket #support-tickets", true)
            .addField("*How do I run restocks?*", "Checkout Delay (ms): 0\nTimeout Delay (ms): 5000\nRetry Delay (ms): 500\nMonitor Delay (ms): 500")
            .addField("*Proxies*", "If you are running tohruAIO on a server please change your monitor proxy and your checkout proxy from local to whatever proxies you are using. Chances are that your server is banned from supreme.\nIf you are running TohruAIO on a computer that is NOT banned on supreme leave your monitor proxy on local (highly suggested since your local ip is probably faster than proxies). Visit Supreme’s shop to find out if you are banned. If you can access the shop you are not banned. You can also run up to 8 tasks on local IP. For extra tasks you will need to use proxies.\n\n>>> Monitor proxies and checkout proxies do not have to be the same. For example, you can use local as your monitor proxy and DC proxies to checkout.  Or you can use DC proxies for monitor and Residential proxies to checkout.\nDC proxies are preferred over residential proxies when it comes to supreme. DC proxies are much faster in speed.", false)
            .addField("**ATC ERROR**", "🛒", true)
            .addField("**GATEWAY ERROR**", "⚠️", true)
            .addField("**RECOMMENDED SETUP**", "📈", true)
            .setFooter("For anymore questions, please open up a ticket in #support-tickets")
        msg.channel.send(embed0).then(m => {
            m.react("🛒")
            m.react("⚠️")
            m.react("📈")
            m.react("🏠")

            const filter = (reaction, user) => reaction.emoji.name === "🛒" && user.id === msg.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed = new Discord.MessageEmbed()
                    .setTitle("Add To Cart Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Either a timeout has occurred or the connection has been lost somehow through your proxy or the Supreme server.")
                    .addField("**Other variations of this error:**", ">>> - Checking Out Error\n - Checking Status Error", false)
                    .addField("**HOME**", "🏠", true)
                m.edit(embed);

            });
            const filter1 = (reaction, user) => reaction.emoji.name === "⚠️" && user.id === msg.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 });

            collector1.on('collect', () => {

                const embed1 = new Discord.MessageEmbed()
                    .setTitle("Gateway Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("A gateway error is a general indicator that there's something wrong with a website's server communication.\nIn other words supremes site is taking a :poop:")
                    .addField("**HOME**", "🏠", true)
                m.edit(embed1);
            })
            const filter2 = (reaction, user) => reaction.emoji.name === "📈" && user.id === msg.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            collector2.on('collect', () => {
                const embed2 = new Discord.MessageEmbed()
                    .setTitle("Supreme Recommended Setup")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .addField("Monitor Delay (ms)", "350")
                    .addField("Monitor Proxy", "Local:")
                    .addField("Timeout (ms)", "1000")
                    .addField("Retry Delay (ms)", "350")
                    .addField("**HOME**", "🏠", false)
                m.edit(embed2);
            })
            
            const filter3 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === msg.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });

            collector3.on('collect', () => {
                const embed3 = new Discord.MessageEmbed()
                .setTitle("FAQ")
                .setAuthor("Tohru Supreme")
                .setColor(0xDB4F58)
                .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                .setDescription("Below is the FAQ for the Tohru Supreme module. Use the reactions below to find information on common errors you could come across when using Tohru.")
                .addField("*Why am I stuck on Finding Product?*", "Please check that your monitor poxy for Supreme Settings is not banned. Then double check your task setup. What keywords did you use? If you are still having issues open a ticket #support-tickets", true)
                .addField("*How do I run restocks?*", "Checkout Delay (ms): 0\nTimeout Delay (ms): 5000\nRetry Delay (ms): 500\nMonitor Delay (ms): 500")
                .addField("*Proxies*", "If you are running tohruAIO on a server please change your monitor proxy and your checkout proxy from local to whatever proxies you are using. Chances are that your server is banned from supreme.\nIf you are running TohruAIO on a computer that is NOT banned on supreme leave your monitor proxy on local (highly suggested since your local ip is probably faster than proxies). Visit Supreme’s shop to find out if you are banned. If you can access the shop you are not banned. You can also run up to 8 tasks on local IP. For extra tasks you will need to use proxies.\n\n>>> Monitor proxies and checkout proxies do not have to be the same. For example, you can use local as your monitor proxy and DC proxies to checkout.  Or you can use DC proxies for monitor and Residential proxies to checkout.\nDC proxies are preferred over residential proxies when it comes to supreme. DC proxies are much faster in speed.", false)
                .addField("**ATC ERROR**", "🛒", true)
                .addField("**GATEWAY ERROR**", "⚠️", true)
                .addField("**RECOMMENDED SETUP**", "📈", false)
                .setFooter("For anymore questions, please open up a ticket in #support-tickets")
                    m.edit(embed3);

            });
        })
    }
};