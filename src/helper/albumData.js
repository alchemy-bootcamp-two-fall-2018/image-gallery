import shortid from 'shortid';
const albums = [
    {
        id: shortid.generate(),
        type: 'velociraptor',
        images: [
            {
                title: 'Feather Beast',
                url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg'
            },
            {
                title: 'Feather Beast',
                url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg'
            },
            {
                title: 'Feather Beast',
                url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Velociraptor_u4hjbq.jpg'
            }
        ]
    },
    {
        id: shortid.generate(),
        type: 't-rex',
        images: [
            {
                title: 'T-Rex Skeleton',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgTYqgQX4cD1SUApQD8MCQoDBgZMX4TD0dvBlrOWgGhz-SeiF_g'
            },
            {
                title: 'T-Rex Skeleton',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgTYqgQX4cD1SUApQD8MCQoDBgZMX4TD0dvBlrOWgGhz-SeiF_g'
            },
            {
                title: 'T-Rex Skeleton',
                url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgTYqgQX4cD1SUApQD8MCQoDBgZMX4TD0dvBlrOWgGhz-SeiF_g'
            },
        ]
    },
    {
        id: shortid.generate(),
        type: 'long-neck',
        images: [ 
            {
                title: 'Long Neck Dino Attack',
                url: 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAyMS82MzEvb3JpZ2luYWwvYnJvbnRvbWVydXMuanBn'
            },
            {
                title: 'Long Neck Taco Holder',
                url: 'https://images-na.ssl-images-amazon.com/images/I/714ZfW4WBEL._SX425_.jpg'
            },
            {
                title: 'Long Neck Taco Holder Copy',
                url: 'https://images-na.ssl-images-amazon.com/images/I/714ZfW4WBEL._SX425_.jpg'
            }
        ]
    }
];

export default albums;