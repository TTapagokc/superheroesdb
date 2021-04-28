

let initionalState = {

    models: [
        {id: 1, nickname: "Horo", link: 'https://99px.ru/cms/templates/main_top_b.png'},
        {id: 2, nickname: "Crist", link: 'https://sun9-47.userapi.com/c824601/v824601769/a3fa2/W9h5JIBIT8E.jpg'},
        {id: 3, nickname: "Sven", link: 'https://www.meme-arsenal.com/memes/33621cce7259d40c4340cee244b8f73a.jpg'},
        { id: 4,
            name: 'TTapagokc',
            link: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSNI3RXk3o1h6j20m0_A-mNOVATbObRGJQicHEh3gceO-TQaA-g'
        },
    ],
};


const ModelsReduser = (state = initionalState, action) => {

    switch (action.type) {
       
        default:
            return state;

    }
};

export default ModelsReduser;