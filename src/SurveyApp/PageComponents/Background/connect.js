import { connect } from "react-redux";
import { resetState, updateBackground } from "../../data/appState";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetState,
  updateBackground,
};

export default connect(mapStateToProps, mapDispatchToProps);
