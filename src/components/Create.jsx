import React from 'react';
import { NavLink } from "react-router-dom";

const CreatePage = (props) => {
    return (
        <div>
            <form> <h1>Create form (on work)</h1>
                <div>
                    <input placeholder="Nickname" type="text" />
                </div>
                <div>
                    <input placeholder="Real Name" type="text" />
                </div>
                <div>
                    <textarea>Super hero powers</textarea>
                </div>
                <div>
                    <textarea>Description</textarea>
                </div>
                <div>
                    <textarea>catch phrase</textarea>
                </div>
                <div>
                    <input name="Super Hero Image" type="file" />
                </div>
                <button>Create</button>
            </form>
            <NavLink to='/models'>
                <button>Cancel</button>
            </NavLink>
        </div>
    );
}

export default CreatePage;