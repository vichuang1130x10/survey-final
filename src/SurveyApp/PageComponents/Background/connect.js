import { connect } from "react-redux";
import { resetState, updateBackground ,saveUserIp} from "../../data/appState";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetState,
  updateBackground,
  saveUserIp
};

export default connect(mapStateToProps, mapDispatchToProps);
