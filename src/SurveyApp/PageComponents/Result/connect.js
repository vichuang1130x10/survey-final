import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  appState: state.app,
});

export default connect(mapStateToProps, null);
