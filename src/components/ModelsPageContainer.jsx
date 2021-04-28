import {compose} from "redux";
import {connect} from "react-redux";
import ModelsPage from "./ModelsPage";


const mapStateToProps = (state) => {
    return {
        modelsInfo: state.ModelsInfo,
    }
};

export default compose(
    connect(mapStateToProps, {}),
) (ModelsPage);
