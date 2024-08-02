module.exports = {
    name: 'say',
    description: 'say.',
    async execute(client,message, args) {
        if(args.length === 0){
           message.channel.send("t'es con ou quoi ? fait .say (ton msg) .")
            return;
        }
        const msg = args.join(' ');
        message.channel.send(msg)
    }
};