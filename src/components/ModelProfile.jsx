import React from 'react';


const ModelProfilePage = (props) => {
    let state = props.modelsInfo;
    let user = state.models.find(item => item.id == props.match.params.modelId);

    //Hero profile info page
    return (
        <div className='profile'>
            <div>nickname: {user.nickname} </div>
            <div>real_name: {user.real_name} </div>
            <div>origin_description: {user.origin_description} </div>
            <div>superpowers: {user.superpowers}</div> 
            <div>catch_phrase: {user.catch_phrase}</div>
            <div>Images</div>
            <img src={user.heroImage} alt="img" />
            <div><button>Eddit (on work)</button></div>
            <div><button>Remove (on work)</button></div>
        </div>
    );
}

export default ModelProfilePage;