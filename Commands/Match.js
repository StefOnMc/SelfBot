const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    name: 'match',
    description: 'Récupère les matchs du jour de ParionsSport.',
    async execute(client,message, args) {
        try {
            const url = 'https://www.pointdevente.parionssport.fdj.fr'; // URL correcte pour les matchs
            const response = await axios.get(url);

            const $ = cheerio.load(response.data);
            let matches = [];
            $('.match-home_infos').each((index, element) => {
                const homeTeam = $(element).find('.match-home_title').text().trim();
                const matchTime = $(element).find('.match-home_time').text().trim();
                const matchTimeEnd = matchTime.slice(-10);
                matches.push({ homeTeam, matchTimeEnd });
            });

            if (matches.length === 0) {
                return message.channel.send('Aucun match trouvé pour aujourd\'hui.');
            }

            let reply = 'Matchs du jour :\n\n';
            matches.forEach(match => {
                reply += `${match.homeTeam}  fin pour miser le ${match.matchTimeEnd} \n`;
            });
            matches = [0];

            await message.channel.send(reply);
        } catch (error) {
            console.error('Erreur lors de la récupération des matchs :', error.message);
            await message.channel.send('Erreur lors de la récupération des matchs. Vérifiez les logs pour plus d\'informations.');
        }
    }
};
