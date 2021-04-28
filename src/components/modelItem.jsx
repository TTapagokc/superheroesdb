import {NavLink} from "react-router-dom";
import React from "react";
import './modelItem.css';

const ModelItem = (props) => {

    return (
        <div className='modelitem-grid'>
           <div className='grid-container'>
           <NavLink to={"/modelsinfo/" + props.id} activeClassName='activeLink'>
                <img className='modelImage' alt='avatar' src={props.heroImage}/>
                {props.name}</NavLink>
                <div>
                    <span>{props.nickname}</span>
                </div>
                <div>
                    <span>{props.real_name}</span>
                </div>
                <div>
                    <span>{props.origin_description}</span>
                </div>
                <div>
                    <span>{props.superpowers}</span>
                </div>
                <div>
                    <span>{props.catch_phrase}</span>
                </div>
           </div>
        </div>
    );
};

export default ModelItem;