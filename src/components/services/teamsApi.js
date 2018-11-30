
const teams = [
    {   
        id: 'blazers',
        name: 'Blazers',
        logo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH16iW3freAhVK0FQKHV4LDlIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.oregonlive.com%2Fblazers%2Findex.ssf%2F2017%2F05%2Fis_this_the_new_portland_trail_blazers_logo.html&psig=AOvVaw1eaQ5tJ6J2yIHkx39hUJqC&ust=1543619577362179', 
        players: [
            {
                lastName: 'Lillard',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6606.png&w=350&h=254'
            },
            {
                lastName: 'McCollum',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/2490149.png&w=350&h=254'
            },
            {
                lastName:'Harkless',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6591.png&w=350&h=254'
            },
            {
                lastName: 'Aminu',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4248.png&w=350&h=254'
            },
            {
                lastName: 'Nurkic',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3102530.png&w=350&h=254'
            }
        ]
    },
    {
        id: 'warriors',
        name: 'Warriors',
        logo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjG3tzc3freAhWHxFQKHc65DLEQjRx6BAgBEAU&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FGolden_State_Warriors&psig=AOvVaw3k2pnkIeRQz5fvUVro9auK&ust=1543619723787127',
        players: [
            {
                lastName: 'Curry',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png&w=350&h=254'
            },
            {
                lastName: 'Thompson',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6475.png&w=350&h=254'
            },
            {
                lastName: 'Green',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6589.png&w=350&h=254'
            },
            {
                lastName: 'Durant',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3202.png&w=350&h=254'
            },
            {
                lastName: 'Cousins',
                url: 'http://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/4258.png&w=350&h=254'
            }
        ]
    }
];


export default {
    getTeams() {
        return teams;
    },
    getTeam(id) {
        return teams.find(team => team.id === id);
    },
    add(team) {
        team.id = team.name.toLowerCase();
        team.players = [];
        teams.push(team);
        return team;
    }
};