const Discord = require("discord.js");

module.exports = {
    name: "shopify",
    run: (client, msg) => {
        const embed0 = new Discord.MessageEmbed()
            .setTitle("FAQ")
            .setAuthor("Shopify")
            .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
            .setColor(0xDB4F58)
            .setDescription("Below is the FAQ for the Tohru Shopify module. Use the reactions below to find information on common sites.")
            .addField("What delays do I use?", "The bot automatically calculates what delays your tasks need to run at. For those that are curious what that is... we run 5000ms delays for each proxy you are using.")
            .addField("How do I set up my monitor proxies?", "First create a proxy group according to our guide. Then, head over to shopify settings and select which proxy groups you want to monitor with. I highly recommend adding your local connection as well since many proxies get rate limited.")
            .addField("Do I need to add a site login?", "Generally no. There are some exceptions such as undefeated though. You can go to the site and attempt to checkout to see whether it requires a login.")
            .addField("What is checkpoint captcha?", "When shopify turns antibot on for their sites, they also turn on checkpoint. This requires you to harvest a captcha token through the captcha harvester to submit to checkpoint. This is usually used in combination with a second captcha needed when inputting contact information.")
            .addField("How many proxies should I use?", "We utilize the proxies you set to their fullest capability in monitoring. For that reason we don’t recommend more than 50 proxies for monitoring. The more proxies you use for monitoring, the faster your data will get used. For checkout we recommend at least a 1:1 proxy to task ratio. Often bad proxies are shared amongst customers and have other issues. If the bot detects this it will automatically allocate the next proxy in the group to the task.")
            .addField("Do I need more than one profile?", "We recommend one profile with at a minimum a unique email for each task you are trying to hit.")
            .addField("What mode should I run?", "Generally run safe mode. There are some exceptions though and we try to keep the #shopify-site-setups guide up to date with popular sites.")
            .addField("What is precart?", "Precart will create a checkout session as soon as you run your task. This in turn will sometimes allow you to skip queue based on when you start the task. If password is up we generally don’t recommend precart.")
            .addField("How do I add a custom site?", "In shopify settings you can add and remove custom sites. When you add one they will appear at the bottom of the site list in task creation.")
            .addField("What is a quick task?", "Quick tasks allow you to run a task for a specific item by clicking on links created by shopify monitors. You can set up which mode and profile get used by default by going to shopify settings.")
            .addField("Dover Street Market", "🔴", true)
            .addField("Palace Skateboards", "🟠", true)
            .addField("Juice Store", "🟡", true)
            .addField("Kith", "🟢", true)
            .addField("Kaws", "🔵", true)
            .addField("Undefeated", "🟣", true)
            .setFooter("For anymore questions, please open up a ticket in #support-tickets")
        msg.channel.send(embed0).then(m => {
            m.react("🔴")
            m.react("🟠")
            m.react("🟡")
            m.react("🟢")
            m.react("🔵")
            m.react("🟣")
            m.react("🏠")

            const filter = (reaction, user) => reaction.emoji.name === "🔴" && user.id === msg.author.id;
            const collector = m.createReactionCollector(filter, { max: 9, time: 5 * 60 * 1000 });

            collector.on("collect", () => {
                const embed = new Discord.MessageEmbed()
                    .setAuthor("Dover Street Market E-Shop Setup", "https://newyork.doverstreetmarket.com/bundles/dsmfrontend/images/meta/newyork/doverstreetmarket.png", "https://eflash-us.doverstreetmarket.com/password")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ✅\n-Password Page ✅")
                    .addField("**Mode**", "Safe ⚠️", true)
                    .addField("**Keywords**", "Preferred ✅", true)
                    .addField("**Login**", "False 🚫", true)
                    .addField("**Home**", "🏠", false)
                m.edit(embed)
            })

            const filter1 = (reaction, user) => reaction.emoji.name === "🟠" && user.id === msg.author.id;
            const collector1 = m.createReactionCollector(filter1, { max: 9, time: 5 * 60 * 1000 });

            collector1.on("collect", () => {
                const embed1 = new Discord.MessageEmbed()
                    .setAuthor("Palace Setup", "https://e7.pngegg.com/pngimages/617/477/png-clipart-triangular-black-palace-signage-skateboarding-companies-palace-skateboards-sport-palace-angle-text.png", "https://shop-usa.palaceskateboards.com/")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ⚠️\n-Password Page ✅")
                    .addField("**Mode**", "Safe ⚠️", true)
                    .addField("**Keywords**", "Preferred ✅", true)
                    .addField("**Login**", "False 🚫", true)
                    .addField("**Home**", "🏠", false)
                m.edit(embed1)
            })

            const filter2 = (reaction, user) => reaction.emoji.name === "🟡" && user.id === msg.author.id;
            const collector2 = m.createReactionCollector(filter2, { max: 9, time: 5 * 60 * 1000 });

            collector2.on("collect", () => {
                const embed2 = new Discord.MessageEmbed()
                    .setAuthor("Juice Store Setup", "https://www.netclipart.com/pp/m/178-1789686_clot-juice-store.png", "https://juicestoreusa.com/")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ⚠️\n-Password Page ✅")
                    .addField("**Mode**", "Paypal 💰", true)
                    .addField("**Keywords**", "Preferred ✅", true)
                    .addField("**Login**", "True ✅", true)
                    .setFooter("Juice store always requires PayPal checkout for hyped drops such as clots. They always put up a password page first so precart is not recommended. They also have required shipping to limited regions at different times so a reshipper may be required.")
                    .addField("**Home**", "🏠", false)

                m.edit(embed2)
            })

            const filter3 = (reaction, user) => reaction.emoji.name === "🟢" && user.id === msg.author.id;
            const collector3 = m.createReactionCollector(filter3, { max: 9, time: 5 * 60 * 1000 });

            collector3.on("collect", () => {
                const embed3 = new Discord.MessageEmbed()
                    .setAuthor("Kith Setup", "https://cdn.shopify.com/s/files/1/0094/2252/files/kith-box-logo.png?14828028724250159580", "https://kith.com")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ✅\n-Password Page 🚫")
                    .addField("**Mode**", "Safe ⚠️", true)
                    .addField("**Early Links**", "Preffered ✅", true)
                    .addField("**Login**", "False 🚫", true)
                    .addField("**Home**", "🏠", false)
                m.edit(embed3)
            })

            const filter4 = (reaction, user) => reaction.emoji.name === "🔵" && user.id === msg.author.id;
            const collector4 = m.createReactionCollector(filter4, { max: 9, time: 5 * 60 * 1000 });

            collector4.on("collect", () => {
                const embed4 = new Discord.MessageEmbed()
                    .setAuthor("Kaws Setup", "https://cdn.shopify.com/s/files/1/0053/7572/1545/files/logo_80x.png?v=1541492675", "https://kawsone.com/password")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ✅\n-Password Page ✅")
                    .addField("**Mode**", "Safe ⚠️", true)
                    .addField("**Password**", "True 🔐", true)
                    .addField("**Login**", "False 🚫", true)
                    .addField("**Home**", "🏠", false)
                m.edit(embed4)
            })

            const filter5 = (reaction, user) => reaction.emoji.name === "🟣" && user.id === msg.author.id;
            const collector5 = m.createReactionCollector(filter5, { max: 9, time: 5 * 60 * 1000 });

            collector5.on("collect", () => {
                const embed5 = new Discord.MessageEmbed()
                    .setAuthor("Undefeated Setup", "https://www.pngitem.com/pimgs/m/45-453784_undefeated-logo-png-transparent-png.png", "https://undefeated.com")
                    .setColor(0xDB4F58)
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setDescription("-Checkpoint ✅\n-Heavy Bot Protection ✅\n-Password Page 🚫")
                    .addField("**Mode**", "Safe ⚠️", true)
                    .addField("**Keywords**", "Preferred ✅", true)
                    .addField("**Login**", "True ✅", true)
                    .addField("**Home**", "🏠", false)
                m.edit(embed5)
            })
            const filter6 = (reaction, user) => reaction.emoji.name === "🏠" && user.id === msg.author.id;
            const collector6 = m.createReactionCollector(filter6, { max: 9, time: 5 * 60 * 1000 });

            collector6.on("collect", () => {
                const embed6 = new Discord.MessageEmbed()
                    .setTitle("FAQ")
                    .setAuthor("Shopify")
                    .setThumbnail("https://pbs.twimg.com/profile_images/1154394689920880641/WbK0zi2y_400x400.jpg")
                    .setColor(0xDB4F58)
                    .setDescription("Below is the FAQ for the Tohru Shopify module. Use the reactions below to find information on common sites.")
                    .addField("What delays do I use?", "The bot automatically calculates what delays your tasks need to run at. For those that are curious what that is... we run 5000ms delays for each proxy you are using.")
                    .addField("How do I set up my monitor proxies?", "First create a proxy group according to our guide. Then, head over to shopify settings and select which proxy groups you want to monitor with. I highly recommend adding your local connection as well since many proxies get rate limited.")
                    .addField("Do I need to add a site login?", "Generally no. There are some exceptions such as undefeated though. You can go to the site and attempt to checkout to see whether it requires a login.")
                    .addField("What is checkpoint captcha?", "When shopify turns antibot on for their sites, they also turn on checkpoint. This requires you to harvest a captcha token through the captcha harvester to submit to checkpoint. This is usually used in combination with a second captcha needed when inputting contact information.")
                    .addField("How many proxies should I use?", "We utilize the proxies you set to their fullest capability in monitoring. For that reason we don’t recommend more than 50 proxies for monitoring. The more proxies you use for monitoring, the faster your data will get used. For checkout we recommend at least a 1:1 proxy to task ratio. Often bad proxies are shared amongst customers and have other issues. If the bot detects this it will automatically allocate the next proxy in the group to the task.")
                    .addField("Do I need more than one profile?", "We recommend one profile with at a minimum a unique email for each task you are trying to hit.")
                    .addField("What mode should I run?", "Generally run safe mode. There are some exceptions though and we try to keep the #shopify-site-setups guide up to date with popular sites.")
                    .addField("What is precart?", "Precart will create a checkout session as soon as you run your task. This in turn will sometimes allow you to skip queue based on when you start the task. If password is up we generally don’t recommend precart.")
                    .addField("How do I add a custom site?", "In shopify settings you can add and remove custom sites. When you add one they will appear at the bottom of the site list in task creation.")
                    .addField("What is a quick task?", "Quick tasks allow you to run a task for a specific item by clicking on links created by shopify monitors. You can set up which mode and profile get used by default by going to shopify settings.")
                    .addField("Dover Street Market", "🔴", true)
                    .addField("Palace Skateboards", "🟠", true)
                    .addField("Juice Store", "🟡", true)
                    .addField("Kith", "🟢", true)
                    .addField("Kaws", "🔵", true)
                    .addField("Undefeated", "🟣", true)
                    .setFooter("For anymore questions, please open up a ticket in #support-tickets")
                m.edit(embed6)
            })
        })
    }
};