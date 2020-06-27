const Discord = require("discord.js");

module.exports = {
    name: "footsites",
    run: (client, msg) => {
        const embed = new Discord.MessageEmbed()
            .setTitle("Frequently Asked Questions")
            .setColor(0xDB4F58)
            .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
            .setDescription("Below is the FAQ for the Tohru Footsites module. Use the reactions below to find information on common errors you could come across when using Tohru, and also the recommended set up.")
            .addField("*What delays should I use?*", "Make sure you have a look in our footsites recommended setup channel, as well as the footsites successful channel to see what is working for everyone.")
            .addField("*I'm getting lots of errors when I am running my tasks and they are looping, what should I do?*", "Make sure you look at the 'Footsite common errors' channel for more information on the statuses you are seeing. In most cases as long as the statuses are changing every so often it is okay to leave your tasks and they will fix themselves.")
            .addField("*My tasks are stuck on one status for a long time, and it isn't changing. What should I do?*", "If your tasks are stuck on one status we recommend checking the `'footsites common errors'` channel for more information on the status you are getting, furthermore, you should restart the task if it is visibly stuck, and if you run into the same issue contact a member of staff to assist.", true)
            .addField("*How many proxies should I run for footsite drops?*", "We recommend a STRICT 1:1 proxy to task ratio. So for every task you make we recommend having a proxy to go with it.")
            .addField("*How many tasks should I have per profile?*", "Although there are cases where more than one task can be run per profile, we recommend a 1:1 task to profile ratio, to ensure no billing errors occur.")
            .addField("*When should I start my tasks before a drop?*", "We recommend starting between 15-30 minutes before queue starts to ensure your tasks are ready.")
            .addField("*What proxies work best when running footsites?*", "We don't recommend any SPECIFIC proxy companies but for the type of proxies we recommend a mix of Residential and Data Centre proxies. This is due to Data Centres being blocked sometimes.")
            .addField("*Do I need to have Monitor proxies and Checkout proxies set?*", "For the most part, yes. We recommend leaving your Monitor Proxy as 'Local' for everything and then for checkout proxy having a proxy in there, but you can add a proxy to your monitor proxy if you wish.")
            .addField("I Don't know where to start with Footsites?", "Make sure to check the 'footsites information' category for more information and also open a ticket so we can help further.")
            .addField("I am receiving an error which does not appear on the 'footsites common errors' page, what should I do?", "Open a ticket and we will be glad to help.")
            .addField("Why am I receiving profile erorrs after I have made sure my profiles are correct?", "Only on rare occasions do footsites allow purchases from an American Express card. We suggest avoid using American Express cards on footsites.")
            .addField("**RECOMMENDED SETUP**", "📈", true)
            .addField("**ERROR 429**", `🔴`, true)
            .addField("**ERROR 500**", "🟠", true)
            .addField("**ERROR 503**", "🟡", true)
            .addField("**ERROR 550**", "🟢", true)
            .addField("**PX Ban**", "🔵", true)
            .addField("**ERROR 329**", "🤖", true)
            .addField("**Session Failed**", "🟤", true)
            .addField("**Token Billing Error**", "💰", true)
            .addField("**Session Error**", "🟣", true)
        msg.channel.send(embed).then(m => {
            m.react("📈")
            m.react("🔴")
            m.react("🟠")
            m.react("🟡")
            m.react("🟢")
            m.react("🔵")
            m.react("🤖")
            m.react("🟤")
            m.react("💰")
            m.react("🟣")
            m.react("🏠")

            const filter0 = (reaction, user) => reaction.emoji.name === "📈" && user.id === msg.author.id;
            const collector0 = m.createReactionCollector(filter0, { max: 9, time: 5 * 60 * 1000 });

            collector0.on('collect', () => {

                const embed0 = new Discord.MessageEmbed()
                    .setTitle("Recommended Setups")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .addField("Restock Monitor Delay (ms)", "5000")
                    .addField("Timeout (ms)", "5000")
                    .addField("Restock Monitor Proxy", "Local")
                    .addField("Retry Delay (ms)", "3000")
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed0);
            });


            const filter = (reaction, user) => reaction.emoji.name === "🔴" && user.id === msg.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on('collect', () => {

                const embed1 = new Discord.MessageEmbed()
                    .setTitle("Error 429")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("You are being rate limited. Increase Delays/Add more proxies/Reduce # of tasks. If none of those work check you proxies.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")

                m.edit(embed1);
            });

            const filter1 = (reaction, user) => reaction.emoji.name === "🟠" && user.id === msg.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 });


            collector1.on('collect', () => {

                const embed2 = new Discord.MessageEmbed()
                    .setTitle("Error 500")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription(" Usually means the site is having issues, but could also be a proxy issue.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed2);
            });

            const filter2 = (reaction, user) => reaction.emoji.name === "🟡" && user.id === msg.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });


            collector2.on('collect', () => {

                const embed3 = new Discord.MessageEmbed()
                    .setTitle("503 Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("The site is dead or endpoint is unavailable.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed3);
            });

            const filter3 = (reaction, user) => reaction.emoji.name === "🟢" && user.id === msg.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });


            collector3.on('collect', () => {

                const embed4 = new Discord.MessageEmbed()
                    .setTitle("Error 550")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Another rate limiting error. Delays/Add more proxies/Reduce # of tasks. If none of those work check you proxies.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed4);
            });

            const filter4 = (reaction, user) => reaction.emoji.name === "🔵" && user.id === msg.author.id;
            const collector4 = m.createReactionCollector(filter4, { max: 9, time: 5 * 60 * 1000 });


            collector4.on('collect', () => {

                const embed5 = new Discord.MessageEmbed()
                    .setTitle("PX Banned")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Your proxies are banned by PX (footsite bot protection). Stop your tasks and use new proxies. ")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed5);
            });

            const filter5 = (reaction, user) => reaction.emoji.name === "🟣" && user.id === msg.author.id;
            const collector5 = m.createReactionCollector(filter5, { max: 9, time: 5 * 60 * 1000 });


            collector5.on('collect', () => {

                const embed6 = new Discord.MessageEmbed()
                    .setTitle("Getting Session Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Usually a site response error but can also be proxy related. This happens often when the site is down or not responding. If you tasks are stuck on this error restart them. Restarting tasks or changing proxies can sometimes solve this issue.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed6)
            });
            const filter6 = (reaction, user) => reaction.emoji.name === "🟤" && user.id === msg.author.id;
            const collector6 = m.createReactionCollector(filter6, { max: 9, time: 5 * 60 * 1000 });


            collector6.on('collect', () => {

                const embed7 = new Discord.MessageEmbed()
                    .setTitle("Getting Session Failed")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription(" Your connection from the site is banned, use different proxies.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed7)
            });

            const filter7 = (reaction, user) => reaction.emoji.name === "💰" && user.id === msg.author.id;
            const collector7 = m.createReactionCollector(filter7, { max: 9, time: 5 * 60 * 1000 });


            collector7.on('collect', () => {

                const embed8 = new Discord.MessageEmbed()
                    .setTitle("Getting Token Error/Billing Token Error")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription(" Check your profiles and make sure they are 100% correct. If you tasks are stuck on this error restart them. Restarting tasks or changing proxies can sometimes solve this issue. Also try increasing your timeout delay to at least 10000 can help. Sometimes the billing token server goes down before  drops so starting tasks earlier is important. Lastly, check to see if you are using an American Express card, this could potentially be the issue.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Session Error**", "🟣", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed8)
            });

            const filter8 = (reaction, user) => reaction.emoji.name === "🤖" && user.id === msg.author.id;
            const collector8 = m.createReactionCollector(filter8, { max: 9, time: 5 * 60 * 1000 });


            collector8.on('collect', () => {

                const embed9 = new Discord.MessageEmbed()
                    .setTitle("Error 329")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Another type of rate limit. Increase Delays/Add more proxies/Reduce # of tasks. If none of those work check you proxies.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**HOME**", "🏠")
                m.edit(embed9)


            })
            const filter9 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === msg.author.id;
            const collector9 = m.createReactionCollector(filter9, { max: 9, time: 5 * 60 * 1000 });


            collector9.on('collect', () => {

                const embed10 = new Discord.MessageEmbed()
                    .setTitle("Frequently Asked Questions")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("Below is the FAQ for the Tohru Footsites module. Use the reactions below to find information on common errors you could come across when using Tohru, and also the recommended set up.")
                    .addField("*What delays should I use?*", "Make sure you have a look in our footsites recommended setup channel, as well as the footsites successful channel to see what is working for everyone.")
                    .addField("*I'm getting lots of errors when I am running my tasks and they are looping, what should I do?*", "Make sure you look at the 'Footsite common errors' channel for more information on the statuses you are seeing. In most cases as long as the statuses are changing every so often it is okay to leave your tasks and they will fix themselves.")
                    .addField("*My tasks are stuck on one status for a long time, and it isn't changing. What should I do?*", "If your tasks are stuck on one status we recommend checking the `'footsites common errors'` channel for more information on the status you are getting, furthermore, you should restart the task if it is visibly stuck, and if you run into the same issue contact a member of staff to assist.", true)
                    .addField("*How many proxies should I run for footsite drops?*", "We recommend a STRICT 1:1 proxy to task ratio. So for every task you make we recommend having a proxy to go with it.")
                    .addField("*How many tasks should I have per profile?*", "Although there are cases where more than one task can be run per profile, we recommend a 1:1 task to profile ratio, to ensure no billing errors occur.")
                    .addField("*When should I start my tasks before a drop?*", "We recommend starting between 15-30 minutes before queue starts to ensure your tasks are ready.")
                    .addField("*What proxies work best when running footsites?*", "We don't recommend any SPECIFIC proxy companies but for the type of proxies we recommend a mix of Residential and Data Centre proxies. This is due to Data Centres being blocked sometimes.")
                    .addField("*Do I need to have Monitor proxies and Checkout proxies set?*", "For the most part, yes. We recommend leaving your Monitor Proxy as 'Local' for everything and then for checkout proxy having a proxy in there, but you can add a proxy to your monitor proxy if you wish.")
                    .addField("I Don't know where to start with Footsites?", "Make sure to check the 'footsites information' category for more information and also open a ticket so we can help further.")
                    .addField("I am receiving an error which does not appear on the 'footsites common errors' page, what should I do?", "Open a ticket and we will be glad to help.")
                    .addField("Why am I receiving profile erorrs after I have made sure my profiles are correct?", "Only on rare occasions do footsites allow purchases from an American Express card. We suggest avoid using American Express cards on footsites.")
                    .addField("**RECOMMENDED SETUP**", "📈", true)
                    .addField("**ERROR 429**", `🔴`, true)
                    .addField("**ERROR 500**", "🟠", true)
                    .addField("**ERROR 503**", "🟡", true)
                    .addField("**ERROR 550**", "🟢", true)
                    .addField("**PX Ban**", "🔵", true)
                    .addField("**ERROR 329**", "🤖", true)
                    .addField("**Session Failed**", "🟤", true)
                    .addField("**Token Billing Error**", "💰", true)
                    .addField("**Session Error**", "🟣", true)
                m.edit(embed10)
            })
        })
    }
}