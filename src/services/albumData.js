import shortid from 'shortid';

export default [
    {
        id: shortid.generate(),
        title: 'Dachsunds',
        description: 'Dachsund pictures',
        images: [
            {
                title: 'Dachsund on the beach',
                url: 'https://www.rover.com/blog/wp-content/uploads/2017/06/pepper-mini-dachshund-960x540.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            },
            {
                title: 'Dachsund with hotdog costume',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxC8_mIsXGec7joCTAa8fnNkloC7bQ9lb-0IzxXHyv5qsOxJ1ocA',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ]

    },
    {
        id: shortid.generate(),
        title: 'Beagles',
        description: 'Beagle pictures',
        images: [
            {
                title: 'Beagle puppy',
                url: 'https://i.pinimg.com/originals/a7/f8/70/a7f870516475a1fc3b52dad9b9ec2c4b.jpg',
                description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            }
        ]
    },
];