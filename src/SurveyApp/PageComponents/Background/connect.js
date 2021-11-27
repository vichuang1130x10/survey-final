import { connect } from "react-redux";
import { resetState } from "../../data/appState";

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  resetState,
};

export default connect(mapStateToProps, mapDispatchToProps);
