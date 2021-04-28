import React from 'react';
import ModelItem from './modelItem';
import './ModelsPage.css'
import { NavLink } from "react-router-dom";

const ModelsPage = (props) => {
    //Creating hero model block elements
    let state = props.modelsInfo;
    let HeroModelBlock = state.models.map(model => <ModelItem heroImage={model.heroImage} nickname={model.nickname} key={model.id}
        id={model.id} />);

    return (
        <div>
            <div className='models-page'>
                {HeroModelBlock}
            </div>
            <div className='pagination'>
               <span> 1 2 3 4 5 </span>
                </div>
            <div className='add-new'>
            <NavLink to='/create'>
                <span>Add New Hero</span>
            </NavLink>
            </div>
        </div>

    );
}

export default ModelsPage;