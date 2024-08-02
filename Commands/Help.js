module.exports = {
    name: 'help',
    description: 'Affiche la liste des commandes.',
    async execute(client,message, args) {
      message.channel.send(" \n help \n - Match avoir les match du jour. \n - Ping voir la latence du bot \n - Say faire parler le bot")
    }
};