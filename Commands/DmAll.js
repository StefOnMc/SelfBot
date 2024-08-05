module.exports = {
    name: 'dmall',
    description: 'dm tout le monde.',
    async execute(client,message, args) {
        if (!args[0]) return message.channel.send("Veuillez entrer un message à envoyer.");

        const users = client.users.cache.filter(user => user.id !== client.user.id);
        const delay = 3000;
        const messageContent = args.join(" ");

        const sendMessages = users.map((user, index) => {
            return new Promise((resolve) => {
                setTimeout(async () => {
                    try {
                        await user.send(messageContent);
                        resolve();
                    } catch (e) {
                        if (e.code === 50007) {
                            console.error(`Failed to send message to ${user.tag}: Cannot send messages to this user`);
                        } else if (e.code === 50009) {
                            console.error(`Failed to send message to ${user.tag}: Channel verification level is too high`);
                        } else {
                            console.error(`Failed to send message to ${user.tag}:`, e);
                        }
                        resolve();
                    }
                }, index * delay);
            });
        });

        await Promise.all(sendMessages);
        message.channel.send("Messages envoyés à tous vos amis.");
    }
};