import {compose} from "redux";
import {connect} from "react-redux";
import ModelProfilePage from "./ModelProfile";
import {withRouter} from "react-router-dom";
import React from "react";

class ModelProfileContainer extends React.Component {
    componentDidMount() {
        let modelId = this.props.match.params.modelId;
        if (!modelId) {
            modelId = 1;
        }
    }

    render() {
        return (
            <ModelProfilePage {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        modelsInfo: state.ModelsInfo,
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withRouter
) (ModelProfileContainer);
