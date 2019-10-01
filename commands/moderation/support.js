const Discord = require("discord.js");

module.exports = {
  name: "support",
  category: "moderation",
  description: "To request a support",
  run: async(client, message, args) => {
if (message.author.bot) return; // Dont answer yourself.
    var args = message.content.trim().split(' ');
    args.shift();
    var reason = args.join(' ')
    if (reason){
      message.reply(new Discord.RichEmbed().setTitle("Started a Ticket!").setAuthor("Support","https://i.imgur.com/UaHfuUX.png",).setFooter("Support").setColor("#2ecc71"))
      
      message.guild.createChannel(message.author.id, "text")
  .then(channel => {
    let category = message.guild.channels.find(c => c.name == "support" && c.type == "category");
    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
         channel.overwritePermissions(message.guild.id, {
        VIEW_CHANNEL: false,
           SEND_MESSAGES: false,
    })

    channel.overwritePermissions(message.author.id, {
        VIEW_CHANNEL: true,
                 SEND_MESSAGES: true
    })

        channel.send(new Discord.RichEmbed().setAuthor(`${message.author.username}'s Ticket`,"https://i.imgur.com/UaHfuUX.png").setFooter("Support").setColor("#2ecc71").setDescription(`Reason: **${reason}**`))
  }).catch(console.error);
      
    } else {
      message.reply(new Discord.RichEmbed().setTitle("You must have a valid reason!").setAuthor("Support","https://i.imgur.com/UaHfuUX.png",).setFooter("Support").setColor("#ff4757"))
    }
    }
}


/*


exports.run = (client, message, args) => {
  console.log("hello")
	
} */