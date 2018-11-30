
const teams = [
    {   
        id: 'blazers',
        name: 'Blazers',
        logo: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjH16iW3freAhVK0FQKHV4LDlIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.oregonlive.com%2Fblazers%2Findex.ssf%2F2017%2F05%2Fis_this_the_new_portland_trail_blazers_logo.html&psig=AOvVaw1eaQ5tJ6J2yIHkx39hUJqC&ust=1543619577362179', 
        players: [
            {
                lastName: 'Lillard',
                pic: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjBkuz98freAhURHzQIHUU9AMMQjRx6BAgBEAU&url=http%3A%2F%2Fwww.espn.com%2Fnba%2Fplayer%2F_%2Fid%2F6606%2Fdamian-lillard&psig=AOvVaw181Z104Kj50sKRnQJHGmPi&ust=1543625163016230'
            },
            {
                lastName: 'McCollum',
                pic: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwirz4WF8vreAhWTNn0KHQr1CuIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.espn.com%2Fnba%2Fplayer%2F_%2Fid%2F2490149%2Fcj-mccollum&psig=AOvVaw30yB_o2B19rGarKcmQqBx3&ust=1543625178294614'
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
                pic: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiO8aK_8PreAhXiy1QKHaH1AVYQjRx6BAgBEAU&url=http%3A%2F%2Fwww.espn.com%2Fnba%2Fplayer%2F_%2Fid%2F3975%2Fstephen-curry&psig=AOvVaw0OzxArvQ11K1tXYZBlWHHQ&ust=1543624758609675'
            },
            {
                lastName: 'Thompson',
                pic: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiAuoLx8freAhWpFzQIHWA4BPQQjRx6BAgBEAU&url=http%3A%2F%2Fwww.espn.com%2Fnba%2Fplayer%2F_%2Fid%2F6475%2Fklay-thompson&psig=AOvVaw2POdVHmukcS3IwyAr1OcLx&ust=1543625134909345'
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
};