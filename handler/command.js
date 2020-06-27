const { readdirSync } = require("fs");

module.exports = (client) => {
    readdirSync("./src/").forEach(dir => {
        const commands = readdirSync(`./src/${dir}`).filter(file => file.endsWith(".js"));
    
        for (let file of commands) {
            let pull = require(`../src/${dir}/${file}`);
    
            if (pull.name) {
                client.commands.set(pull.name, pull);
            } else {
                continue;
            }
        }
    });
}