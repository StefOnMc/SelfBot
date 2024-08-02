module.exports = {
    name: 'ping',
    description: 'Affiche la latence du bot.',
    async execute(client,message, args) {
        const sent = await message.channel.send('Ping...');
        const latency = sent.createdTimestamp - message.createdTimestamp;
        const apiLatency = Math.round(client.ws.ping);
        sent.edit(`Latence du message: ${latency}ms. \n Latence de l'API de discord: ${apiLatency}ms.`);
    }
};