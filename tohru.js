const { Client, Collection } = require("discord.js");
const { token } = require("./config.json")

const client = new Client({
    disableEveryone: true
});

client.commands = new Collection();
client.aliases = new Collection();


["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.on("ready", async () => {

    client.user.setPresence({
        status: "online",
        game: {
            name: "t!help",
            type: "PLAYING"
        }
    });

    client.on("message", async message => {
        const prefix = "t!";


        if (message.author.bot) return;
        if (!message.guild) return;
        if (!message.content.startsWith(prefix)) return;
        if (!message.member) message.member = await message.guild.fetchMember(message);

        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        if (cmd.length === 0) return;

        let command = client.commands.get(cmd);
        if (!command) command = client.commands.get(client.aliases.get(cmd));

        if (command)
            command.run(client, message, args);
    });

});
client.login(token).then(console.log("Tohru Bot is Online"));
