
let teams = [
    {   
        id: 'blazers',
        name: 'Blazers',
        logo: 'http://pluspng.com/img-png/portland-trail-blazers-png-96-1000.png',
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
        logo: 'http://www.stickpng.com/assets/images/58419ce2a6515b1e0ad75a69.png',
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

const json = window.localStorage.getItem('teams');

if(json) {
    teams = JSON.parse(json);
}
else {
    save();
}
function save() {
    window.localStorage.setItem('teams', JSON.stringify(teams));
}


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
        save();
        return team;
    }
};