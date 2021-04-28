import React from 'react';


const ModelProfilePage = (props) => {
    let state = props.modelsInfo;

    //Hero profile info page
    return (
        <div className='profile'>
            <div>nickname: </div>
            <div>real_name: </div>
            <div>origin_description: </div>
            <div>superpowers: </div>
            <div>catch_phrase: </div>
            <div>Images</div>
            <img src={state.heroImage} alt="img" />
        </div>
    );
}

export default ModelProfilePage;