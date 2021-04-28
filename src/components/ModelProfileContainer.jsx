import {compose} from "redux";
import {connect} from "react-redux";
import ModelProfilePage from "./ModelProfile";


const mapStateToProps = (state) => {
    return {
        modelsInfo: state.ModelsInfo,
    }
};

export default compose(
    connect(mapStateToProps, {}),
) (ModelProfilePage);
