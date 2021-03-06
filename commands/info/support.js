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
      message.reply(new Discord.MessageEmbed().setTitle("Started a Ticket!").setAuthor("Support",message.guild.iconURL,).setFooter("Support").setColor("#2ecc71"))
      
      message.guild.channels.create(message.author.id, "text")
  .then(channel => {
    let category = message.guild.channels.cache.find(c => c.name == "||< Support >||" && c.type == "category");
    if (!category) throw new Error("Category channel does not exist");
    channel.setParent(category.id);
         channel.updateOverwrite(message.guild.id, {
        VIEW_CHANNEL: false,
           SEND_MESSAGES: false,
    })

    channel.updateOverwrite(message.author.id, {
        VIEW_CHANNEL: true,
                 SEND_MESSAGES: true
    })
    channel.updateOverwrite(message.guild.roles.cache.find(c => c.name == "support staff"), {
        VIEW_CHANNEL: true,
                 SEND_MESSAGES: true
    })


        channel.send(new Discord.MessageEmbed().setAuthor(`${message.author.username}'s Ticket`,message.guild.iconURL).setFooter("Support").setColor("#2ecc71").addField("Information","Thank you for starting a Ticket! Please wait until a \nSupport Staff has claimed this ticket!",true).addField("Issue:",reason,true))
  }).catch(console.error);
      
    } else {
      message.reply(new Discord.MessageEmbed().setTitle("You must have a valid reason!").setAuthor("Support",message.guild.iconURL,).setFooter("Support").setColor("#ff4757"))
    }
    }
}


/*


exports.run = (client, message, args) => {
  console.log("hello")
	
} */