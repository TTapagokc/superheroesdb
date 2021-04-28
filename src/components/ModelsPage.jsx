import React from 'react';
import ModelItem from './modelItem';
import './ModelsPage.css'

const ModelsPage = (props) => {
    //Creating hero model block elements
    let state = props.modelsInfo;
    let HeroModelBlock = state.models.map(model => <ModelItem heroImage={model.heroImage} nickname={model.nickname} key={model.id}
        id={model.id} />);

    return (
        <div className='models-page'>
                    {HeroModelBlock}
        </div>
    );
}

export default ModelsPage;