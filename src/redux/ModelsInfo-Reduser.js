
//Super Heroes data base 
let initionalState = {

    models: [
        { id: 1, nickname: "Horo", real_name: 'Kevin Nerio', origin_description: 'God boy', superpowers: 'can fly?', catch_phrase: 'I am good boy', heroImage: 'https://99px.ru/cms/templates/main_top_b.png' },
        { id: 2, nickname: "Crist", real_name: 'Mate Nataro', origin_description: 'God boy', superpowers: 'can fly?', catch_phrase: 'I am not a good boy', heroImage: 'https://sun9-47.userapi.com/c824601/v824601769/a3fa2/W9h5JIBIT8E.jpg' },
        { id: 3, nickname: "Sven", real_name: 'Hiro Risatu', origin_description: 'God boy', superpowers: 'can fly?', catch_phrase: 'I am good boy to', heroImage: 'https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg' },
        {
            id: 4,
            nickname: 'TTapagokc', real_name: 'Alex Dev', origin_description: 'Good boy', superpowers: 'i can fly', catch_phrase: 'I can fly',
            heroImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'
        },
        { id: 5, nickname: "Sarus", real_name: 'Hato Risatu', origin_description: 'God boy', superpowers: 'can fly?', catch_phrase: 'I am good boy to', heroImage: 'https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg' },
    ],
};

const ModelsInfoReduser = (state = initionalState, action) => {


    switch (action.type) {

        default:
            return state;

    }
};

export default ModelsInfoReduser;